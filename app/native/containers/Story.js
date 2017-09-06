import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';

const _ = require( 'lodash' );

import Styles from '../styles';
import Chapter from '../components/Chapter';

class Story extends Component {
	constructor( props ) {
		super( props );

		this.zoomAnimation = {
			0: {
				opacity: 0,
				scale: 0
			},
			1: {
				opacity: 1,
				scale: 1
			}
		};
	}

	_getNextChapter() {
		this.props.getNextChapter();
	}

	_renderChapters() {
		return _.map( this.props.chapters, ( chapter ) => {
			return (
				<View key={'chapter_' + chapter.chapterNumber} style={[ Styles.allCenter ]}>
					<Text style={[ Styles.text, Styles.chapterName ]}>{chapter.name}</Text>
					<Chapter text={chapter.text}/>
				</View>
			);
		} );
	}

	_fetchNextChapter() {
		if ( this.props.chapters.length < this.props.totalNumberOfChapters ) {
			this.props.fetchNextChapter( this.props.storyId, this.props.chapters.length + 1 );
		}
	}

	_whileReadingStory( { nativeEvent } ) {
		const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
		const paddingToBottom = 100;
		if ( layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom ) {
			console.log( "while reading reached end:" );
		}
	}

	render() {
		console.log("cover url: " + this.props.cover)
		return (
			<Animatable.View animation={this.zoomAnimation} duration={400} style={[ Styles.flexOne, Styles.allCenter ]}>

				<ScrollView style={[ Styles.flexOne ]} contentContainerStyle={[ Styles.storyContainer ]}
					showsVerticalScrollIndicator={false} onScroll={this._whileReadingStory.bind( this )}>
					
					<View style={[Styles.storyInfoContainer, Styles.allCenter]}>
						<Image source={{uri: this.props.cover}} style={[Styles.storyImage]}/>
						<Text style={[ Styles.text, Styles.boldText, Styles.storyTitle ]}>{this.props.title}</Text>
						<Text style={[ Styles.text, Styles.storyAuthor ]}>{this.props.authorName}</Text>
					</View>

					<View style={[ Styles.chaptersContainer, Styles.allCenter ]}>
						{this._renderChapters()}
					</View>
				</ScrollView>
			</Animatable.View>
		);
	}
}

function mapStateToProps( state ) {
	return {
		storyId: state.storyBeingRead.id,
		cover: state.storyBeingRead.cover,
		title: state.storyBeingRead.title,
		authorName: state.storyBeingRead.author.name,
		totalNumberOfChapters: state.storyBeingRead.chaptersCount,
		chapters: state.storyBeingRead.chapters
	};
}

export default connect( mapStateToProps )( Story );