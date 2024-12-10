import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const DateTime = () => {
  const date = useSelector((state) => state.date.date); // Отримуємо дату з Redux
  const dispatch = useDispatch();

  // Функція для оновлення дати
  const updateDate = () => {
    dispatch({ type: 'UPDATE_DATE', payload: new Date() });
  };

  // Використовуємо useEffect для оновлення дати кожну секунду
  useEffect(() => {
    const interval = setInterval(updateDate, 1000); // Оновлюємо дату кожну секунду
    return () => clearInterval(interval); // Очищуємо інтервал при розмонтуванні
  }, [dispatch]);

  return (
    <div>
      <p>{date.toLocaleString()}</p> {/* Відображаємо дату у форматі локалі */}
    </div>
  );
};

export default DateTime;