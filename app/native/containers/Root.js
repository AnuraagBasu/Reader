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

	_browseStories () {
		this.props.changeCurrentView('StoryList');
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
					<View style={[Styles.flexOne]}>
						<View style={{backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
							<TouchableOpacity activeOpacity={0.9} onPress={this._browseStories.bind(this)} style={{padding: 5, backgroundColor: 'rgba(0, 0, 0, 0.9)', marginRight: 10}}>
								<Text style={[Styles.text, Styles.smallerText]}>BACK</Text>
							</TouchableOpacity>
							<Text numberOfLines={1} style={[Styles.text, Styles.boldText]}>{this.props.currentStoryName}</Text>
						</View>
						<Story {...this.props} onChapterReadingEnd={this._fetchNextChapter.bind(this)}/>
					</View>
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
		currentStoryName: state.storyBeingRead.title,
		totalChapters: state.storyBeingRead.chaptersCount,
		chaptersAlreadyFetched: state.storyBeingRead.chapters ? state.storyBeingRead.chapters.length : 0,
		loadStoriesInProgress: state.storiesLoading,
		loadChapterInProgress: state.chapterLoading
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( Root );