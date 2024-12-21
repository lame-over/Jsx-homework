// store.js
import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './Currency slice';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});

export default store;