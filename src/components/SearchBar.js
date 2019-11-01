import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const SearchBar = ({ searchValue, onTermChange, onSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<FontAwesome name="wikipedia-w" style={styles.icon} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				value={searchValue}
				placeholder="Search wikipedia"
				onChangeText={onTermChange}
				onEndEditing={onSubmit}
				style={styles.input}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#F0eeee',
		height: 50,
		flexDirection: 'row',
		borderBottomColor: 'black',
		borderBottomWidth: 1
	},
	input: {
		flex: 1,
		fontSize: 18
	},
	icon: {
		fontSize: 35,
		alignSelf: 'center',
		margin: 15
	}
})

export default SearchBar
