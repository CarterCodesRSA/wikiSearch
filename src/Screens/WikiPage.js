import React from 'react'
import { WebView } from 'react-native'

const WikiPage = ({ navigation }) => {
	const { pageid } = navigation.getParam('item')
	return (
		<WebView source={{ uri: `https://en.wikipedia.org/?curid=${pageid}` }} />
	)
}

WikiPage.navigationOptions = ({ navigation }) => {
	const { title } = navigation.getParam('item')
	return {
		title
	}
}

export default WikiPage
