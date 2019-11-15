import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ContactHome from '../screen/ContactHome';
import ContactDetail from '../screen/ContactDetail';

const MenuStack = createStackNavigator({
  ContactHomeScreen: ContactHome,
  ContactDetailScreen: ContactDetail,
});

const AppContainer = createAppContainer(MenuStack);

class AppWithNavigationState extends Component {
  render() {
    return <AppContainer />;
  }
}

export default AppWithNavigationState;
