import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import image from '../../assets/images/default-user.png';

class ChatList extends Component {
  constructor(props) {
    super(props);
    
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'DeepLink') {
      if(event.link === 'newChat') {
        this.props.navigator.toggleDrawer({ side: 'left' });
        setTimeout(() => this.handleChatScreenChange(), 300);
      }
    }


    if (event.type === 'NavBarButtonPress') {
      switch(event.id) {
        case 'viewProfile':
          this.handleProfileScreenChange();
          break;
        case 'toggleSideDrawer':
          this.props.navigator.toggleDrawer({ side: 'left' });
          break;
      }
    }
  }

  handleChatScreenChange = () => {
    this.props.navigator.push({
      screen: 'poliglot.ChatScreen',
      title: 'Chat',
      backButtonTitle: '',
      animationType: 'slide-horizontal'
    });
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

        <TouchableOpacity onPress={this.handleChatScreenChange}>
          <View style={styles.activeChatContainer}>
            <Image 
              style={styles.activeChatImage}
              source={image}
            />
            <View style={styles.activeChatInfo}>
              <Text style={styles.activeChatInfoName}>Rane Gowan</Text>
              <Text style={styles.activeChatInfoMessage}>What are you doing?</Text>
              <Text style={styles.activeChatInfoTime}>About an hour ago</Text>
            </View>
          </View>
        </TouchableOpacity>
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
  },
  activeChatContainer: {
    flexDirection: 'row',
    padding: 10
  },
  activeChatImage: {
    width: 80,
    height: 80,
    borderRadius: 3,
    borderWidth: 3,
    borderColor: 'rgba(155, 202, 114, 0.8)'
  },
  activeChatInfo: {
    flex: 1,
    paddingLeft: 10
  },
  activeChatInfoName: {
    fontFamily: 'Avenir Next',
    fontSize: 22,
    fontWeight: '500',
    color: '#3d5265'
  },
  activeChatInfoMessage: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
    fontWeight: '400',
    color: '#3d5265'
  },
  activeChatInfoTime: {
    fontFamily: 'Avenir Next',
    fontSize: 14,
    fontWeight: '300',
    color: '#3d5265'
  }
});

export default ChatList;