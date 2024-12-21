// currencySlice.js
import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    amount: 1,
    conversionRate: 0.85, // Приклад курсу
  },
  reducers: {
    setFromCurrency(state, action) {
      state.fromCurrency = action.payload;
      localStorage.setItem('fromCurrency', action.payload);
    },
    setToCurrency(state, action) {
      state.toCurrency = action.payload;
      localStorage.setItem('toCurrency', action.payload);
    },
    setAmount(state, action) {
      state.amount = action.payload;
    },
    setConversionRate(state, action) {
      state.conversionRate = action.payload;
    },
  },
});

export const { setFromCurrency, setToCurrency, setAmount, setConversionRate } = currencySlice.actions;
export default currencySlice.reducer;