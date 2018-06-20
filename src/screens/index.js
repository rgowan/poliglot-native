import { Navigation } from 'react-native-navigation';

import LandingScreen from './Landing/Landing';
import LoginScreen from './Auth/Login';
import RegisterScreen from './Auth/Register';

import ChatListScreen from './ChatList/ChatList';
import ChatScreen from './Chat/Chat';
import ProfileScreen from './Profile/Profile';
import SideDrawerScreen from './SideDrawer/SideDrawer';

export default () => {
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
    'poliglot.ChatScreen',
    () => ChatScreen
  );
  Navigation.registerComponent(
    'poliglot.ProfileScreen',
    () => ProfileScreen
  );
  Navigation.registerComponent(
    'poliglot.SideDrawerScreen',
    () => SideDrawerScreen
  );
};