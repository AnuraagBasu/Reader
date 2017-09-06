import React, { Component } from 'react';
import {
	ScrollView,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

const _ = require( 'lodash' );

import StoryPreview from '../components/StoryPreview';

import Styles from '../styles';

class StoryList extends Component {
	constructor( props ) {
		super( props );
	}

	_getStories() {
		console.log( "styles is: " + Styles.flexOne );
		return _.map( this.props.stories, ( story ) => {
			return (
				<TouchableOpacity key={'story_' + story.id} style={[ Styles.flexOne, Styles.listItemWrapper ]}
					activeOpacity={0.9} onPress={this._storyToReadSelected.bind( this, story.id )}>
					<StoryPreview title={story.title} cover={story.cover} authorName={story.author.name} teaser={story.teaser} />
				</TouchableOpacity>
			);
		} );
	}

	_storyToReadSelected( storyId ) {
		this.props.onStorySelect( storyId );
	}

	render() {
		return (
			<ScrollView style={[ Styles.flexOne, Styles.listContainer ]}>
				{this._getStories()}
			</ScrollView>
		);
	}
}

function mapStateToProps( state ) {
	return {
		stories: state.stories
	};
}

export default connect( mapStateToProps )( StoryList );
