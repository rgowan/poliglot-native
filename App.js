import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import registerAllScreens from './src/screens/index';

registerAllScreens();

export const startAuthScreen = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'poliglot.LandingScreen',
      navigatorStyle: {
        navBarHidden: true
        // navBarNoBorder: true
      }
    },
    drawer: {
      left: {
        screen: 'poliglot.SideDrawerScreen'
      }
    }
  });
};

export const startChatScreen = props => {
  Promise
    .all([
      Icon.getImageSource('ios-chatbubbles', 35),
      Icon.getImageSource('md-person', 35)
    ])
    .then(icons => {
      props.navigator.resetTo({
        screen: 'poliglot.ChatListScreen',
        navigatorStyle: {
          navBarTextFontSize: 22,
          navBarButtonColor: '#97cbfc'
        },
        navigatorButtons: {
          leftButtons: [
            {
              icon: icons[0],
              title: 'New Chat',
              id: 'toggleSideDrawer'
            }
          ],
          rightButtons: [
            {
              icon: icons[1],
              title: 'Profile',
              id: 'viewProfile'
            }
          ]
        }
      });
    });
};