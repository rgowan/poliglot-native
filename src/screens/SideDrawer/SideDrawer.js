import React, { Component } from 'react';

import {
  StyleSheet,
  Dimensions,
  View,
  TextInput
} from 'react-native';

class SideDrawer extends Component {
  render () {
    return (
      <View style={[styles.container, { width: Dimensions.get('window').width * 0.9 }]}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Search...'
            underlineColorAndroid='transparent'
            autoCorrect={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#3d5265'
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center'
  },
  input: {
    fontFamily: 'Avenir Next',
    backgroundColor: 'rgba(222, 239, 253, .1)',
    width: '90%',
    color: '#fff',
    fontSize: 18,
    padding: 10,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'rgba(222, 239, 253, .2)'
  }
});

export default SideDrawer;