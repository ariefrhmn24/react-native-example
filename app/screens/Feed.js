import { createStackNavigator } from 'react-navigation';
import Feeds from '../pages/Feeds/Feeds.page';

const FeedScreen = createStackNavigator(
  {
    Feeds: Feeds,
  }, {
    defaultNavigationOptions: {
      headerTintColor: 'red',
      headerStyle: {
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home',
    },
});

export default FeedScreen;