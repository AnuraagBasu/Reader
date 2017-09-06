import {
	StyleSheet
} from 'react-native';

export default Styles = StyleSheet.create( {
	listContainer: {
		paddingHorizontal: 15,
		paddingTop: 20
	},
	listItemWrapper: {
		marginBottom: 10
	},
	previewContainer: {
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		flexDirection: 'row',
		padding: 10,
		shadowColor: '#fff',
		shadowOpacity: 0.8,
		shadowRadius: 1,
		shadowOffset: {
			width: 0,
			height: 0
		}
	},
	previewThumb: {
		borderWidth: 1,
		borderColor: 'white',
		// width: 80,
		// height: 120
	},
	previewImage: {
		flex: 1,
		borderWidth: 0.5,
		borderColor: 'rgba(255, 255, 255, 0.6)',
		resizeMode: 'cover',
		// width: 80,
		// height: 120
	},
	previewInfoWrapper: {
		flex: 3,
		marginLeft: 8
	},
	storyContainer: {
		paddingHorizontal: 15
	},
	storyTitle: {
		fontSize: 18,
		textAlign: 'center',
		color: '#fff'
	},
	storyAuthor: {
		fontSize: 14,
		textAlign: 'center',
		color: '#fff'
	},
	storyImage: {
		resizeMode: 'cover', 
		height: 100, 
		width: 280,
		marginBottom: 10
	},
	storyInfoContainer: {
		marginBottom: 30,
		marginTop: 20
	},
	chaptersContainer: {
		marginBottom: 30
	},
	chapterContainer: {
		marginBottom: 50
	},
	chapterName: {
		marginBottom: 15
	},
	endMarker: {
		alignSelf: 'center',
		marginBottom: 20,
		height: 3,
		width: 250,
		backgroundColor: 'rgba(255, 255, 255, 0.8)'
	}
} );