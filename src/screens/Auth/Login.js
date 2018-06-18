import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Login = () => (
  <View style={styles.container}>
    <Text>Poliglot</Text>
    <Text>Login</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Login;