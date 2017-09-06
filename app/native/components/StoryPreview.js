import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Dimensions
} from 'react-native';

import Styles from '../styles';

export default class StoryPreview extends Component {
	render() {
		return (
			<View style={[ Styles.flexOne, Styles.previewContainer ]}>
				<View style={[ Styles.previewWrapper ]}>
					<View style={[ Styles.previewThumb ]}>
						<Image source={{ uri: this.props.cover }} style={[ Styles.previewImage ]} />
					</View>

					<View style={Styles.previewInfoWrapper}>
						<View>
							<Text style={[ Styles.text, Styles.boldText ]}>{this.props.title}</Text>
							<Text style={[ Styles.text, Styles.smallText ]}>{this.props.authorName}</Text>
						</View>
						<View>
							<Text style={[ Styles.text, Styles.smallerText, { marginTop: 10 }]}>{this.props.teaser}</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}