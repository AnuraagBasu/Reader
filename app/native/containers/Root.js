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

const _ = require( 'lodash' );

class Root extends Component {
	constructor( props ) {
		super( props );
	}

	_setStoryToRead( storyId ) {
		this.props.startReading( storyId );
	}

	componentWillMount() {
		this.props.fetchStories();
	}

	render() {
		let screen;
		switch ( this.props.currentView ) {
			case 'StoryList':
				screen = (
					<StoryList {...this.props} onStorySelect={this._setStoryToRead.bind( this )} />
				);
				break;

			case 'Story':
				screen = (
					<Story {...this.props} />
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
		currentView: state.currentView
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( Root );