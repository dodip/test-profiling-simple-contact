import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { View } from 'react-native';
import AppWithNavigationState from './src/navigation/Router';
import store from './src/store';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      </View>
    );
  }
}

export default App;
