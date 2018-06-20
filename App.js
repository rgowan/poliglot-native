import { Navigation } from 'react-native-navigation';

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

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'poliglot.LandingScreen',
    navigatorStyle: {
      navBarHidden: true
    }
  }
});