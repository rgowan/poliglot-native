import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import LandingScreen from './src/screens/Landing/Landing';
import LoginScreen from './src/screens/Auth/Login';
import RegisterScreen from './src/screens/Auth/Register';

import ChatListScreen from './src/screens/ChatList/ChatList';
import ProfileScreen from './src/screens/Profile/Profile';

Navigation.registerComponent(
  'poliglot.LandingScreen',
  () => LandingScreen
);

Navigation.registerComponent(
  'poliglot.LoginScreen',
  () => LoginScreen
);

Navigation.registerComponent(
  'poliglot.RegisterScreen',
  () => RegisterScreen
);

Navigation.registerComponent(
  'poliglot.ChatListScreen',
  () => ChatListScreen
);

Navigation.registerComponent(
  'poliglot.ProfileScreen',
  () => ProfileScreen
);

export const startAuthScreen = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'poliglot.LandingScreen',
      navigatorStyle: {
        navBarNoBorder: true
      }
    }
  });
};

export const startChatScreen = props => {
  Promise
    .all([
      Icon.getImageSource('ios-chatbubbles', 35),
      Icon.getImageSource('md-person', 35)
    ])
    .then(icons => {
      props.navigator.resetTo({
        screen: 'poliglot.ChatListScreen',
        navigatorStyle: {
          navBarTextFontSize: 22,
          navBarNoBorder: true,
          navBarButtonColor: '#97cbfc'
        },
        navigatorButtons: {
          leftButtons: [
            {
              icon: icons[0],
              title: 'Add',
              id: 'sideDrawerToggle'
            }
          ],
          rightButtons: [
            {
              icon: icons[1],
              title: 'Add',
              id: 'viewProfile'
            }
          ]
        }
      });
    });
};