import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ResultContainer = ({ result }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}> {result.title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderColor: 'black',
		backgroundColor: '#fff',
		borderWidth: 1,
		height: 60,
		margin: 10,
		borderRadius: 10,
		justifyContent: 'center'
	},
	text: {
		padding: 10,
		fontSize: 18,
		textAlign: 'center'
	}
})

export default ResultContainer
