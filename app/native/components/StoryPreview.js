import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Dimensions
} from 'react-native';

export default class StoryPreview extends Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#eee' }}>
				<View style={{ flexDirection: 'row', padding: 10, shadowColor: '#424242', shadowOpacity: 0.8, shadowRadius: 5, shadowOffset: { width: 0, height: 0 } }}>
					<View style={{ borderWidth: 1, borderColor: 'white', width: 80, height: 120 }}>
						<Image source={{ uri: this.props.cover }} style={{ resizeMode: 'cover', width: 80, height: 120 }} />
					</View>

					<View style={{ marginLeft: 10 }}>
						<View>
							<Text style={{ fontWeight: 'bold', fontSize: 16 }}>{this.props.title}</Text>
							<Text style={{ fontSize: 12 }}>{this.props.authorName}</Text>
						</View>
						<View>
							<Text style={{ fontSize: 11, marginTop: 10 }}>{this.props.teaser}</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}