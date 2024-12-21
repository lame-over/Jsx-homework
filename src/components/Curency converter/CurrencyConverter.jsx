// CurrencyConverter.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFromCurrency, setToCurrency, setAmount } from './Currency slice';

const CurrencyConverter = () => {
  const dispatch = useDispatch();
  const { fromCurrency, toCurrency, amount, conversionRate } = useSelector(state => state.currency);

  useEffect(() => {
    const savedFromCurrency = localStorage.getItem('fromCurrency');
    const savedToCurrency = localStorage.getItem('toCurrency');
    
    if (savedFromCurrency) {
      dispatch(setFromCurrency(savedFromCurrency));
    }
    if (savedToCurrency) {
      dispatch(setToCurrency(savedToCurrency));
    }
  }, [dispatch]);

  const handleAmountChange = (e) => {
    dispatch(setAmount(e.target.value));
  };

  const handleFromCurrencyChange = (e) => {
    dispatch(setFromCurrency(e.target.value));
  };

  const handleToCurrencyChange = (e) => {
    dispatch(setToCurrency(e.target.value));
  };

  const convertedAmount = (amount * conversionRate).toFixed(2);

  return (
    <div>
      <h2>Конвертер валют</h2>
      <input type="number" value={amount} onChange={handleAmountChange} />
      <select value={fromCurrency} onChange={handleFromCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        
      </select>
      <span> в </span>
      <select value={toCurrency} onChange={handleToCurrencyChange}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
    
      </select>
      <h3>Результат: {convertedAmount} {toCurrency}</h3>
    </div>
  );
};

export default CurrencyConverter;