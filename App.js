import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/Screens/SearchScreen'
import WikiPage from './src/Screens/WikiPage'

const navigator = createStackNavigator(
	{
		Search: SearchScreen,
		Wiki: WikiPage
	},
	{
		initialRouteName: 'Search',
		defaultNavigationOptions: {
			title: `Wiki's Top 10`,
			headerStyle: {
				backgroundColor: '#181c42'
			},
			headerTitleStyle: {
				color: '#fff'
			},
			headerTintColor: '#fff'
		}
	}
)

export default createAppContainer(navigator)
