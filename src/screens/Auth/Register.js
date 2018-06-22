import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import { 
  primaryColor
} from '../../components/UI/globalStyles';

import { startChatScreen } from '../../../App';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Heading from '../../components/UI/Heading/Heading';

class Register extends Component {

  handleGoBack = () => {
    this.props.navigator.resetTo({
      screen: 'poliglot.LandingScreen',
      navigatorStyle: {
        navBarHidden: true
      }
    });
  }

  handleSubmit = () => {
    startChatScreen(this.props);
  }

  render () {
    return (
      <View style={styles.container}>
        <Heading style={styles.heading}>Register</Heading>
  
        <View style={styles.inputContainer}>
          <Input
            placeholder='Email'
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
          />

          <Input
            placeholder='Select Language'
          />
  
          <Input
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
          />

          <Input
            placeholder='Confirm Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.handleSubmit}
            backgroundColor={primaryColor}
          >
            Register
          </Button>

          <Button
            onPress={this.handleGoBack}
            backgroundColor='transparent'
          >
            Back
          </Button>
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
  heading: {
    fontSize: 50,
    fontWeight: '700',
    fontFamily: 'Avenir Next',
    color: '#3d5265',
    textAlign: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  buttonContainer: {
    width: '80%',
    paddingTop: 50
  }
});


export default Register;