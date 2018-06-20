import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class Profile extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  heading: {
    fontSize: 50,
    fontWeight: '700',
    fontFamily: 'Avenir Next',
    color: '#3d5265'
  }
});

export default Profile;