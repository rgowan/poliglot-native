import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { 
  secondryColor
} from '../../components/UI/globalStyles';

import { startChatScreen } from '../../../App';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

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
          <Input
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Email'
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
          />
  
          <Input
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.handleSubmit}
            backgroundColor={secondryColor}
          >
            Login
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

export default Login;