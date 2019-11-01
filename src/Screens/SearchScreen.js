import React, { useState } from 'react'
import {
	View,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	ScrollView
} from 'react-native'

import useResults from '../hooks/useResults'
import { SearchBar, ResultContainer, NoData } from '../components'

const SearchScreen = ({ navigation }) => {
	const [searchValue, setSearchValue] = useState('')
	const [searchApi, searchResults, errorMessage] = useResults()

	return (
		<View style={styles.background}>
			<SearchBar
				value={searchValue}
				onTermChange={newSearch => setSearchValue(newSearch)}
				onSubmit={() => searchApi(searchValue)}
			/>
			<ScrollView>
				{errorMessage !== '' ? <NoData /> : null}
				<FlatList
					data={searchResults}
					keyExtractor={item => item.pageid.toString()}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								onPress={() => {
									navigation.navigate('Wiki', { item })
									console.log('This has happened')
								}}
							>
								<ResultContainer result={item} />
							</TouchableOpacity>
						)
					}}
				/>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#f2f2f2',
		flex: 1,
		flexDirection: 'column',
		alignContent: 'center'
	}
})

export default SearchScreen
