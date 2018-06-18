import React from 'react';

import LandingScreen from './src/screens/Landing/Landing';
import LoginScreen from './src/screens/Auth/Login';
import RegisterScreen from './src/screens/Auth/Register';

export default class App extends React.Component {
  render() {
    return (
      <LandingScreen />
    );
  }
}
