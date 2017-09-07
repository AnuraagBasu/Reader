import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	Dimensions
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

	_renderChapters() {
		let chaptersToRender =  _.map( this.props.chapters, ( chapter ) => {
			return (
				<View key={'chapter_' + chapter.chapterNumber} style={[ Styles.allCenter, Styles.chapterContainer ]}>
					<Text style={[ Styles.text, Styles.chapterName ]}>{chapter.name}</Text>
					<Chapter text={chapter.text}/>
				</View>
			);
		} );

		if (this.props.chapterLoading) {
			chaptersToRender.push(
				<View key={'chapter_loading'} style={[Styles.allCenter, Styles.chapterContainer]}>
					<Text style={[Styles.text, Styles.smallText]}>loading next chapter...</Text>
				</View>
			)
		}

		return chaptersToRender;
	}

	_whileReadingStory( { nativeEvent } ) {
		const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
		let windowHeight = Dimensions.get('window').height;
		const paddingToBottom = 500;
		if ( (windowHeight + contentOffset.y) >= (contentSize.height - paddingToBottom) ) {
			console.log( "while reading reached end:" );
			this.props.onChapterReadingEnd();
		}
	}

	render() {
		let endMarker;
		if (this.props.chapters.length == this.props.totalNumberOfChapters) {
			endMarker = (
				<View style={[Styles.endMarker]}></View>
			);
		}

		return (
			<Animatable.View animation={this.zoomAnimation} duration={400} style={[ Styles.flexOne, Styles.allCenter ]}>

				<ScrollView style={[ Styles.flexOne ]} contentContainerStyle={[ Styles.storyContainer ]} 
					showsVerticalScrollIndicator={false} bounces={false}
					onScroll={this._whileReadingStory.bind( this )}>
					
					<View style={[Styles.storyInfoContainer, Styles.allCenter]}>
						<Image source={{uri: this.props.cover}} style={[Styles.storyImage]}/>
					</View>

					<View style={[ Styles.chaptersContainer, Styles.allCenter ]}>
						{this._renderChapters()}
					</View>

					{endMarker}
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
		chapters: state.storyBeingRead.chapters,
		chapterLoading: state.chapterLoading
	};
}

export default connect( mapStateToProps )( Story );