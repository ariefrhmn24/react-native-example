import { createStackNavigator } from 'react-navigation';
import Feeds from '../pages/Feeds/Feeds.page';

const FeedScreen = createStackNavigator(
  {
    Feeds: Feeds,
  }, {
    defaultNavigationOptions: {
      headerTitle: 'Home',
      headerTintColor: 'red',
    },
    navigationOptions: {
      tabBarLabel: 'Home',
    },
});

export default FeedScreen;