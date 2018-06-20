import React, { Component } from 'react';

import image from '../../assets/images/default-user.png';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

class Profile extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profilePicture}
          source={image}
        />

        <View>
          <Text>Rane Gowan</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  profilePicture: {
    width: 250,
    height: 250
  }
});

export default Profile;