import React from 'react';

import {
  StyleSheet,
  TextInput
} from 'react-native';

const input = props => (
  <TextInput
    style={styles.input}
    {...props}
  />
);

const styles = StyleSheet.create({
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
  }
});

export default input;

