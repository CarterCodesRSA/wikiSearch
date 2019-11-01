import { useEffect, useState } from 'react'

export default () => {
	const [searchResults, setSearchResults] = useState([])
	const [errorMessage, setErrorMessage] = useState('')

	const searchApi = async search => {
		try {
			const res = await fetch(
				`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(
					search
				)}`
			)
			const response = await res.json()
			setSearchResults(response.query.search)
			setErrorMessage('')
		} catch (error) {
			setErrorMessage('Something went wrong')
			setSearchResults([])
		}
	}
	return [searchApi, searchResults, errorMessage]
}
