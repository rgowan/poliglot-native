import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Register = () => (
  <View style={styles.container}>
    <Text>Poliglot</Text>
    <Text>Register</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Register;