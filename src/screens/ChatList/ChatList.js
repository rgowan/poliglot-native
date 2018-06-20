import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class ChatList extends Component {
  constructor(props) {
    super(props);
    
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {

      switch(event.id) {
        case 'viewProfile':
          this.handleProfileScreenChange();
          break;
        case 'toggleSideDrawer':
          this.props.navigator.toggleDrawer({ 
            side: 'left',
            passProps: {
              currentScreen: 'calendar'
            }
          });
          break;
      }

    }
  }

  handleProfileScreenChange = () => {
    Promise
      .all([
        Icon.getImageSource('md-log-out', 35)
      ])
      .then(icons => {
        this.props.navigator.push({
          screen: 'poliglot.ProfileScreen',
          animated: true,
          animationType: 'slide-horizontal',
          backButtonTitle: '',
          navigatorStyle: {
            navBarTextFontSize: 22,
            navBarButtonColor: '#97cbfc'
          },
          navigatorButtons: {
            rightButtons: [
              {
                icon: icons[0],
                title: 'Log Out',
                id: 'logout'
              }
            ]
          }
        });
      });
  }

  render () {
    return (
      <ScrollView style={ styles.container }>
        <Text style={ styles.heading }>Chats</Text>

        <Text style={ styles.message }>You currently have no active chats.</Text>
      </ScrollView>
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
  },
  message: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Avenir Next',
    color: '#3d5265'
  }
});

export default ChatList;