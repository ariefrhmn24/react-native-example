import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './Profiles.styles';
import { NavigationEvents } from 'react-navigation';

class Profiles extends React.Component {
	render() {
		return (
			<View style={styles.center}>
			<NavigationEvents
				onWillFocus={() => console.log('will focus')}
				onDidFocus={() => console.log('did focus')}
				onWillBlur={() => console.log('will blur')}
				onDidBlur={() => console.log('did blur')}
    	/>
			<Text>Details Screen</Text>
			<Button
			  title="Go to Profile Details"
			  onPress={() => this.props.navigation.push('Profiles')}
			/>
			<Button
			  title="Go to Home"
			  onPress={() => this.props.navigation.navigate('Profiles')}
			/>
			<Button
			  title="Go back"
			  onPress={() => this.props.navigation.goBack()}
			/>
			<Button
			  title="Go to First Screen"
			  onPress={() => this.props.navigation.popToTop()}
			/>
			</View>
		);
	}
}

export default Profiles;