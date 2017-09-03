export const URLs = {
	stories: function () {
		return "https://cap_america.inkitt.de/1/stories";
	},
	chapter: function ( storyId, chapterNumber ) {
		return "https://cap_america.inkitt.de/1/stories/" + storyId + "/chapters/" + chapterNumber;
	}
};