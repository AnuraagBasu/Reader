const _ = require( 'lodash' );

import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const currentView = createReducer( {}, {
	[ types.SET_CURRENT_VIEW ]( state, action ) {
		return action.payload.view;
	}
} );

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
				verticalCover: story.vertical_cover.iphone,
				cover: story.cover.url,
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
		let allChapters = _.cloneDeep(state.chapters);
		let thisChapter = {
			id: action.payload.chapter.id,
			name: action.payload.chapter.name,
			text: action.payload.chapter.text,
			chapterNumber: action.payload.chapter.chapter_number
		};
		allChapters.push( thisChapter );

		let currentState = Object.assign( {}, state );
		currentState.chapters = allChapters;

		console.log( "set next chapter: " + allChapters.length );
		return {
			...state,
			chapters: allChapters
		};
	}
} );