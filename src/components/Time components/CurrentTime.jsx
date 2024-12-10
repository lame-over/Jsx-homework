import React from "react";

const CurrentTime = ({ date }) => {
  const formattedTime = date.toLocaleTimeString('uk-UA'); // Формат часу в Україні

  return <div>{formattedTime}</div>;
};

export default CurrentTime;