import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView
} from 'react-native';
import { connect } from 'react-redux';

import HTMLView from 'react-native-htmlview';

import Styles from '../styles';

export default class Chapter extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		let htmlString = "<p>“Oh, I will go by all means,” <strong>I answered: and I was glad of the unexpected <em>opportunity</em> to gratify my much-excited curiosity.</strong> I slipped out of the room, unobserved by any eye—for the company were gathered in one mass about the trembling trio just returned—and I closed the door quietly behind me.</p><br><br><p>“Oh, I will go by all means,” <strong>I answered: and I was glad of the unexpected <em>opportunity</em> to gratify my much-excited curiosity.</strong> I slipped out of the room, unobserved by any eye—for the company were gathered in one mass about the trembling trio just returned—and I closed the door quietly behind me.</p><p>“Oh, I will go by all means,” <strong>I answered: and I was glad of the unexpected <em>opportunity</em> to gratify my much-excited curiosity.</strong> I slipped out of the room, unobserved by any eye—for the company were gathered in one mass about the trembling trio just returned—and I closed the door quietly behind me.</p><br><br><p>“Oh, I will go by all means,” <strong>I answered: and I was glad of the unexpected <em>opportunity</em> to gratify my much-excited curiosity.</strong> I slipped out of the room, unobserved by any eye—for the company were gathered in one mass about the trembling trio just returned—and I closed the door quietly behind me.</p><p>“Oh, I will go by all means,” <strong>I answered: and I was glad of the unexpected <em>opportunity</em> to gratify my much-excited curiosity.</strong> I slipped out of the room, unobserved by any eye—for the company were gathered in one mass about the trembling trio just returned—and I closed the door quietly behind me.</p><br><br><p>“Oh, I will go by all means,” <strong>I answered: and I was glad of the unexpected <em>opportunity</em> to gratify my much-excited curiosity.</strong> I slipped out of the room, unobserved by any eye—for the company were gathered in one mass about the trembling trio just returned—and I closed the door quietly behind me.</p>";

		const styles = {
			p: {
				color: 'rgba(255, 255, 255, 0.8)'
			}
		};

		return (
			<HTMLView value={this.props.text} stylesheet={styles}/>
		);
	}
}