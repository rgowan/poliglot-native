import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import { startChatScreen } from '../../../App';
import PrimaryButton from '../../components/UI/PrimaryButton/PrimaryButton';

class Login extends Component {

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
        <Text style={styles.heading}>Login</Text>
  
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Email'
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
          />
  
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={this.handleSubmit}
            backgroundColor='#deeffd'
          >
            Login
          </PrimaryButton>

          <PrimaryButton
            onPress={this.handleGoBack}
            backgroundColor='transparent'
          >
          Back
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
  input: {
    fontFamily: 'Avenir Next',
    backgroundColor: 'rgba(222, 239, 253, .1)',
    width: '100%',
    marginTop: 8,
    fontSize: 18,
    marginBottom: 8,
    padding: 10,
    margin: 5,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'rgba(222, 239, 253, .8)'
  },
  buttonContainer: {
    width: '80%',
    paddingTop: 50
  }
});

export default Login;