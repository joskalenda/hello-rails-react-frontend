
import { configureStore } from '@reduxjs/toolkit';

import greetingReducer from './greetings/greetingReducer';

const store = configureStore(
  {
    reducer: {
      greetings: greetingReducer,
    },
  });

export default store;