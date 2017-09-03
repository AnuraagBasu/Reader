const _ = require( 'lodash' );

import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const stories = createReducer( {}, {
	[ types.SET_STORIES ]( state, action ) {
		return _.map( action.payload.stories, ( story ) => {
			return {
				id: story.id,
				title: story.title,
				teaser: story.teaser,
				storyStatus: story.story_status,
				chaptersCount: story.chapters_count,
				author: {
					name: story.author.name,
					image: story.author.small_profile_picture_url
				},
				cover: story.vertical_cover.iphone,
				chapters: []
			};
		} );
	}
} );

export const storyBeingRead = createReducer( {}, {
	[ types.SET_STORY_BEING_READ ]( state, action ) {
		return _.find( action.payload.stories, { id: action.payload.storyIdToRead } );
	},
	[ types.SET_CHAPTER ]( state, action ) {
		let chapter = action.payload.chapter;

		return {
			...state,
			chapters: state.chapters.concat( chapter )
		}
	}
} );