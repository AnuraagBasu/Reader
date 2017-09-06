import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../../core/actions';

import StoryList from './StoryList';
import Story from './Story';

import Styles from '../styles';

const _ = require( 'lodash' );

class Root extends Component {
	constructor( props ) {
		super( props );
	}

	_setStoryToRead( storyId ) {
		this.props.startReading( storyId );
	}

	_fetchNextChapter () {
		if (!this.props.loadChapterInProgress && (this.props.chaptersAlreadyFetched < this.props.totalChapters)) {
			this.props.fetchNextChapter(this.props.currentStoryId, this.props.chaptersAlreadyFetched+1);
		}
	}

	componentWillMount() {
		this.props.fetchStories();
	}

	render() {
		let screen;
		switch ( this.props.currentView ) {
			case 'StoryList':
				if (this.props.loadStoriesInProgress) {
					screen = (
						<View style={[Styles.flexOne, Styles.allCenter]}>
							<Text style={[Styles.text, Styles.boldText]}>Loading...</Text>
						</View>
					);
				} else {
					screen = (
						<StoryList {...this.props} onStorySelect={this._setStoryToRead.bind( this )} />
					);
				}
				break;

			case 'Story':
				screen = (
					<Story {...this.props} onChapterReadingEnd={this._fetchNextChapter.bind(this)}/>
				);
				break;
		}

		return (
			<View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
				{screen}
			</View>
		)
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators( ActionCreators, dispatch );
}

function mapStateToProps( state ) {
	return {
		currentView: state.currentView,
		currentStoryId: state.storyBeingRead.id,
		totalChapters: state.storyBeingRead.chaptersCount,
		chaptersAlreadyFetched: state.storyBeingRead.chapters ? state.storyBeingRead.chapters.length : 0,
		loadStoriesInProgress: state.storiesLoading,
		loadChapterInProgress: state.chapterLoading
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( Root );