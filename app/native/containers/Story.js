import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import Chapter from '../components/Chapter';

class Story extends Component {
	constructor( props ) {
		super( props );
	}

	_getNextChapter() {
		this.props.getNextChapter();
	}

	_renderChapter( chapter ) {
		return (
			<Chapter />
		);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ padding: 10 }}>
					<Text style={{ fontSize: 24, fontWeight: 'bold' }}>{this.props.title}</Text>
					<Text style={{ fontSize: 18 }}>{this.props.authorName}</Text>
				</View>

				<FlatList data={this.props.chapters}
					renderItem={this._renderChapter.bind( this )}
					style={{ flex: 1 }} contentContainerStyle={{ padding: 10, textAlign: 'center' }}>

				</FlatList>
			</View>
		);
	}
}

function mapStateToProps( state ) {
	return {
		title: state.story.title,
		authorName: state.story.author.name,
		chapters: state.story.chapters
	};
}

export default connect( mapStateToProps )( Story );