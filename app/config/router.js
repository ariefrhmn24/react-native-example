import React from 'react';
import { createAppContainer } from 'react-navigation';
import TabNavigator from './tabNavigator';

class MainRoutes extends React.Component {
	render() {
	const AppContainer = createAppContainer(TabNavigator);

	return (
			<AppContainer>
				<TabNavigator />
			</AppContainer>
		);
	}
}

export default MainRoutes;