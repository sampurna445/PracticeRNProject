import React, {createContext, useState, useContext, useEffect} from 'react';
import {AppState as AppStateRN, Platform} from 'react-native';

const AppStateContext = createContext();

export const AppStateProvider = ({children}) => {
  const [appState, setAppState] = useState(AppStateRN.currentState);

  useEffect(() => {
    const handleAppStateChange = nextAppState => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        if (Platform.OS === 'ios') {
          // Handle specific behavior on iOS when the app becomes active
        }
      }

      if (nextAppState === 'active') {
        console.log('This is the active state of the app');
        // Perform actions when the app is in the active state
      }

      setAppState(nextAppState);
    };

    const appStateSubscription = AppStateRN.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      appStateSubscription.remove();
    };
  }, [appState]);

  return (
    <AppStateContext.Provider value={{appState}}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useState must be used within an AppStateProvider');
  }
  return context;
};
