import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useAppState} from '../AppStateProvider';

const AppStateReceiver = () => {
  const appstate = useAppState();
  return (
    <SafeAreaView>
      <Text>Current App State: {appstate}</Text>
    </SafeAreaView>
  );
};

export default AppStateReceiver;
