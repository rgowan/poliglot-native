import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

const primaryButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.button, { backgroundColor: props.backgroundColor }]}>
        <Text style={styles.buttonText}>
          { props.children }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default primaryButton;