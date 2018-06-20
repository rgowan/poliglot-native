import React, { Component } from 'react';

import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  Text,
  Image
} from 'react-native';

import image from '../../assets/images/default-user.png';

class SideDrawer extends Component {
  constructor(props) {
    super(props);

    console.log('fijbsfiusduiyd', this.props);
  }

  handleSuggestionPress = () => {
    console.log(this.props.currentScreen);
  }


  render () {
    return (
      <View style={[styles.container, { width: Dimensions.get('window').width * 0.9 }]}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Who do you want to chat to?</Text>
          <TextInput
            style={styles.input}
            placeholder='Search...'
            placeholderTextColor='#ccc'
            underlineColorAndroid='transparent'
            autoCorrect={false}
          />
        </View>

        <ScrollView>
          <TouchableOpacity onPress={this.handleSuggestionPress}>
            <View style={styles.suggestionItem}>
              <Image 
                style={styles.suggestionImage}
                source={image}
              />

              <Text style={styles.suggestionText}>Rane Gowan</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 10,
    backgroundColor: '#3d5265'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    backgroundColor: 'rgba(222, 239, 253, .1)',
    width: '90%',
    color: '#fafafa',
    fontSize: 20,
    padding: 10,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'rgba(222, 239, 253, .05)'
  },
  inputLabel: {
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Avenir Next'
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    width: '75%'
  },
  suggestionImage: {
    width: 50,
    height: 50,
    borderRadius: 3,
    borderWidth: 3,
    borderColor: 'rgba(155, 202, 114, 0.8)'
  },
  suggestionText: {
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    fontSize: 20,
    marginLeft: 10,
    color: '#fff'
  }
});

export default SideDrawer;