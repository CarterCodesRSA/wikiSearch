import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default NoData = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require('../images/nodata.png')} />
			<Text>Oops, Something went wrong?</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		height: 150,
		width: 150
	}
})
