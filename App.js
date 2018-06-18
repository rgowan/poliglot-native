import LandingScreen from './src/screens/Landing/Landing';
import LoginScreen from './src/screens/Auth/Login';
import RegisterScreen from './src/screens/Auth/Register';

import { Navigation } from 'react-native-navigation';

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

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'poliglot.LoginScreen',
    navigatorStyle: {
      // navBarHidden: true
    }
  }
});