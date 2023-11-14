import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Navigator from './navigation';
import {Provider} from 'react-redux';
import {store} from './store';
import {AppStateProvider} from './components/AppStateProvider';
import {AppStateReceiver} from './components/AppStateReceiver';
import {CryptoHelper} from './helpers';

const App = () => {
  // useEffect(() => {
  //   const encryptedString = CryptoHelper.encryptString(
  //     'hey this is plain text',
  //   );

  //   console.log('Encrypted String: ' + encryptedString);
  // }, []);
  return (
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
