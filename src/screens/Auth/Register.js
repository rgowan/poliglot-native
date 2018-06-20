import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { startChatScreen } from '../../../App';

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
        <Text style={styles.heading}>Register</Text>
  
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
            placeholder='Select Language'
          />
  
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Confirm Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.handleSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleGoBack}>
            <View style={styles.transparentButton}>
              <Text style={styles.buttonText}>Back</Text>
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
  },
  button: {
    width: '100%',
    backgroundColor: '#97cbfc',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'rgba(70, 136, 199, 0.6)'
  },
  transparentButton: {
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    borderRadius: 3
  },
  buttonText: {
    fontSize: 18,
    color: '#3d5265',
    fontWeight: '600',
    fontFamily: 'Avenir Next'
  }
});


export default Register;