import * as types from './types';
import { URLs } from '../config';

export function changeCurrentView( nextView ) {
	return {
		type: types.SET_CURRENT_VIEW,
		payload: {
			view: nextView
		}
	};
}

export function fetchStories() {
	return ( dispatch, getState ) => {
		dispatch({
			type: types.FETCH_STORIES_IN_PROGRESS
		});

		return fetch( URLs.stories() )
			.then( resp => resp.json() )
			.then( resp => {
				if ( resp.response && resp.response.length ) {
					return dispatch( setStories( resp.response ) );
				}
			} )
			.catch( err => {
				//TODO: handle error
				console.log( "error in fetching stories: " + JSON.stringify( err ) );
			} );
	};
}

export function startReading( storyId ) {
	return ( dispatch, getState ) => {
		dispatch( setStoryBeingRead( storyId, getState().stories ) );
		dispatch( changeCurrentView( 'Story' ) );
		dispatch( fetchNextChapter( storyId, 1 ) );
	}
}

export function fetchNextChapter( storyId, chapterId ) {
	return ( dispatch, action ) => {
		dispatch({
			type: types.FETCH_CHAPTERS_IN_PROGRESS
		});

		return fetch( URLs.chapter( storyId, chapterId ) )
			.then( resp => resp.json() )
			.then( resp => {
				if ( resp.response ) {
					return dispatch( setNextChapter( resp.response ) );
				}
			} )
			.catch( err => {
				//TODO: handle error
				console.log( "error in fetching chapter" );
			} );
	};
}

function setStories( stories ) {
	return {
		type: types.SET_STORIES,
		payload: {
			stories: stories
		}
	};
}

function setStoryBeingRead( storyId, allStories ) {
	return {
		type: types.SET_STORY_BEING_READ,
		payload: {
			storyIdToRead: storyId,
			stories: allStories
		}
	};
}

function setNextChapter( chapter ) {
	return {
		type: types.SET_CHAPTER,
		payload: {
			chapter: chapter
		}
	};
}