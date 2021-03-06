import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers';

function getStore( initialState ) {
	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware,
		)
	);

	return createStore( reducer, initialState, enhancer );
}

const initialState = {
	currentView: 'StoryList',
	stories: [],
	storyBeingRead: {},
	storiesLoading: true,
	chapterLoading: true
};

export default getStore( initialState );