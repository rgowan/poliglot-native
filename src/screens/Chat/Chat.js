import React, { Component } from 'react';

import {
  // StyleSheet,
  View,
  Text
} from 'react-native';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.id === 'willAppear') {
      this.props.navigator.setDrawerEnabled({
        side: 'left',
        enabled: false
      });
    }
  }

  componentWillUnmount() {
    this.props.navigator.setDrawerEnabled({
      side: 'left',
      enabled: true
    });
  }
  
  render () {
    return (
      <View>
        <Text>Chat</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
  
// });

export default Chat;