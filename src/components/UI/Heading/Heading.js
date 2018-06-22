import React from 'react';

import {
  StyleSheet,
  Text
} from 'react-native';

const heading = props => (
  <Text style={styles.heading}>
    { props.children }
  </Text>
);

const styles = StyleSheet.create({
  heading: {
    fontSize: 60,
    fontWeight: '700',
    fontFamily: 'Avenir Next',
    color: '#3d5265',
    textAlign: 'center'
  }
});

export default heading;