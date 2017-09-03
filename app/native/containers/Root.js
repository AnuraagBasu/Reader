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

import StoryPreview from '../components/StoryPreview';

const _ = require( 'lodash' );

class Root extends Component {
	constructor( props ) {
		super( props );
	}

	_getStories() {
		return _.map( this.props.stories, ( story ) => {
			return (
				<TouchableOpacity key={'story_' + story.id} style={{ flex: 1, marginBottom: 10 }}
					activeOpacity={0.9} onPress={this._storyToReadSelected.bind( this, story.id )}>
					<StoryPreview title={story.title} cover={story.cover} authorName={story.author.name} teaser={story.teaser} />
				</TouchableOpacity>
			);
		} );
	}

	_storyToReadSelected( storyId ) {
		this.props.setStoryToRead( storyId );
	}

	componentWillMount() {
		this.props.fetchStories();
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#424242' }}>
				<ScrollView style={{ flex: 1, padding: 10 }}>
					{this._getStories()}
				</ScrollView>
			</View>
		)
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators( ActionCreators, dispatch );
}

function mapStateToProps( state ) {
	return {
		stories: state.stories
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( Root );