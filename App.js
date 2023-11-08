import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import Navigator from './navigation';
import {Provider} from 'react-redux';
import {store} from './store';
import {AppStateProvider} from './components/AppStateProvider';

const App = () => {
  return (
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <Navigator />
    //   </NavigationContainer>
    // </Provider>
    <Provider store={store}>
      <AppStateProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </AppStateProvider>
    </Provider>
  );
};

export default App;
