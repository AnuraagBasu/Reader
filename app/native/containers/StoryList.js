import React, { Component } from 'react';
import {
	ScrollView,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';

const _ = require( 'lodash' );

import StoryPreview from '../components/StoryPreview';

import Styles from '../styles';

class StoryList extends Component {
	constructor( props ) {
		super( props );
	}

	_getStories() {
		return _.map( this.props.stories, ( story, index ) => {
			let animationDuration = 400 + (200*index);

			return (
				<Animatable.View key={'story_' + story.id} animation={'fadeIn'} duration={animationDuration}>
					<TouchableOpacity style={[ Styles.flexOne, Styles.listItemWrapper ]}
						activeOpacity={0.9} onPress={this._storyToReadSelected.bind( this, story.id )}>
						<StoryPreview title={story.title} cover={story.verticalCover} authorName={story.author.name} teaser={story.teaser} />
					</TouchableOpacity>
				</Animatable.View>
			);
		} );
	}

	_storyToReadSelected( storyId ) {
		this.props.onStorySelect( storyId );
	}

	render() {
		return (
			<ScrollView style={[ Styles.flexOne ]} contentContainerStyle={[Styles.listContainer]} showsVerticalScrollIndicator={false}>
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
