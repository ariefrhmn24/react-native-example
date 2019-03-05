import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedScreen from '../screens/Feed';
import ProfileScreen from '../screens/Profile';

const getTabBarIcon = (navigation, focused, tintColor) => {
	const { routeName } = navigation.state;
	let IconComponent = Ionicons;
	let iconName;
	if (routeName === 'Feed') {
		iconName = `ios-information-circle${focused ? '' : '-outline'}`;
	} else if (routeName === 'Profile') {
		iconName = `ios-options${focused ? '' : '-outline'}`;
	}

	// You can return any component that you like here!
	return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default TabNavigator = createBottomTabNavigator(
	{
		Feed: FeedScreen,
		Profile: ProfileScreen
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) =>
				getTabBarIcon(navigation, focused, tintColor),
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		},
		initialRouteName: 'Feed',
	}
);