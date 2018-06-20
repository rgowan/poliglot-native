import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import LandingScreen from './src/screens/Landing/Landing';
import LoginScreen from './src/screens/Auth/Login';
import RegisterScreen from './src/screens/Auth/Register';

import ChatListScreen from './src/screens/ChatList/ChatList';

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

export const startAuthScreen = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'poliglot.LandingScreen',
      navigatorStyle: {
        navBarHidden: true
      }
    }
  });
};

export const startChatScreen = props => {
  Promise
    .all([
      Icon.getImageSource('ios-chatbubbles', 30),
      Icon.getImageSource('md-person', 30)
    ])
    .then(icons => {
      props.navigator.resetTo({
        screen: 'poliglot.ChatListScreen',
        title: 'Chats',
        navigatorStyle: {
          navBarTextFontSize: 20
        },
        navigatorButtons: {
          leftButtons: [
            {
              icon: icons[0]
            }
          ],
          rightButtons: [
            {
              icon: icons[1]
            }
          ]
        }
      });
    });
};