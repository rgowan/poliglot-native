import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Landing = () => (
  <View style={styles.container}>
    <Text>Poliglot</Text>
    <Text>Break the language barrier</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Landing;