import { createStackNavigator } from 'react-navigation';
import Profiles from '../pages/Profiles/Profiles.page';

const ProfileScreen = createStackNavigator(
  {
    Profiles: Profiles,
  }, {
    defaultNavigationOptions: {
      headerTitle: 'Profile',
      headerTintColor: 'blue',
    },
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
});

export default ProfileScreen;