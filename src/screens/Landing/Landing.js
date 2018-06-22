import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import logo from '../../assets/images/logo.png';
import PrimaryButton from '../../components/UI/PrimaryButton/PrimaryButton';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.id === 'willAppear') {
      this.props.navigator.setDrawerEnabled({
        side: 'left',
        enabled: false
      });
    }
  }

  componentWillUnmount() {
    this.props.navigator.setDrawerEnabled({
      side: 'left',
      enabled: true
    });
  }

  handleScreenChange = screen => {
    const newScreen = screen === 'Register' ? 'poliglot.RegisterScreen' : 'poliglot.LoginScreen';

    this.props.navigator.push({
      screen: newScreen,
      animated: true,
      animationType: 'slide-horizontal',
      backButtonTitle: '',
      navigatorStyle: {
        navBarHidden: true
      }
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image 
            source={logo}
            style={styles.logo}
          />
          <Text style={styles.heading}>Poliglot</Text>
          <Text style={styles.subHeading}>Break the language barrier.</Text>
        </View>
  
        <View style={styles.buttonContainer}>
          <PrimaryButton 
            onPress={() => this.handleScreenChange('Register')}
            backgroundColor='#97cbfc'
          >
            Register
          </PrimaryButton>

          <PrimaryButton 
            onPress={() => this.handleScreenChange('Login')}
            backgroundColor='#deeffd'
          >
          Login
          </PrimaryButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  textContainer: {
    alignItems: 'center'
  },
  logo: {
    width: 160,
    height: 160
  },
  heading: {
    fontSize: 60,
    fontWeight: '700',
    fontFamily: 'Avenir Next',
    color: '#3d5265',
    textAlign: 'center'
  },
  subHeading: {
    fontSize: 20,
    fontFamily: 'Avenir Next',
    color: '#3d5265',
    textAlign: 'center'
  },
  buttonContainer: {
    width: '80%',
    paddingTop: 50
  }
});

export default Landing;