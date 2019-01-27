import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

class Feeds extends React.Component {
	static propTypes = {
		profile: PropTypes.object,
	};

	render () {
		return (
			<View>
				<Text>Feeds</Text>
			</View>
		);
	}
}

export default Feeds;
