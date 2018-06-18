import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import logo from '../../assets/images/logo.png';

class Landing extends Component {

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
          <TouchableOpacity onPress={() => this.handleScreenChange('Register')}>
            <View style={[styles.button, { backgroundColor: '#97cbfc' }]}>
              <Text style={styles.buttonText}>Register</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleScreenChange('Login')}>
            <View style={[styles.button, { backgroundColor: '#deeffd' }]}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 60
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
    position: 'absolute',
    bottom: 25,
    width: '80%'
  },
  button: {
    backgroundColor: '#97cbfc',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'rgba(70, 136, 199, 0.6)'
  },
  buttonText: {
    fontSize: 20,
    color: '#3d5265',
    fontWeight: '600',
    fontFamily: 'Avenir Next'
  }
});

export default Landing;