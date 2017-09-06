import {
	StyleSheet
} from 'react-native';

export default Styles = StyleSheet.create( {
	listContainer: {
		marginHorizontal: 15,
		marginVertical: 30
	},
	listItemWrapper: {
		marginBottom: 10
	},
	previewContainer: {
		backgroundColor: '#616161'
	},
	previewWrapper: {
		flexDirection: 'row',
		padding: 10,
		shadowColor: '#000',
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
		width: 80,
		height: 120
	},
	previewImage: {
		resizeMode: 'cover',
		width: 80,
		height: 120
	},
	previewInfoWrapper: {
		marginLeft: 8
	},
	storyContainer: {
		marginHorizontal: 15,
		marginVertical: 30
	},
	storyTitle: {
		fontSize: 18,
		textAlign: 'center'
	},
	storyAuthor: {
		fontSize: 14,
		textAlign: 'center'
	},
	chaptersContainer: {
		marginTop: 30
	}
} );