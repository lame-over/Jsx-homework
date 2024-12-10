import React from "react";

const CurrentDate = ({ date }) => {
  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('uk-UA', options); // Формат часу в Україні

  return <div>{formattedDate}</div>;
};

export default CurrentDate;