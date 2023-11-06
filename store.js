import {configureStore} from '@reduxjs/toolkit';
import reducers from './features/reducers';
import counterReducer from './features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
