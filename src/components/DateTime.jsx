import React, { useEffect } from "react";
import { connect } from "react-redux";

const DateTime = ({ date, updateDate }) => {
  // Використовуємо useEffect для оновлення дати кожну секунду
  useEffect(() => {
    const interval = setInterval(updateDate, 1000); // Оновлюємо дату кожну секунду
    return () => clearInterval(interval); // Очищуємо інтервал при розмонтуванні
  }, [updateDate]);

  return (
    <div>
      <p>{date.toLocaleString()}</p> {/* Відображаємо дату у форматі локалі */}
    </div>
  );
};

// Функція для отримання даних з Redux
const mapStateToProps = (state) => ({
  date: state.date.date,
});

// Функція для оновлення дати
const mapDispatchToProps = (dispatch) => ({
  updateDate: () => dispatch({ type: 'UPDATE_DATE', payload: new Date() }),
});

// Підключення компонента до Redux
export default connect(mapStateToProps, mapDispatchToProps)(DateTime);