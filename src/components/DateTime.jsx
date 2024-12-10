import React from "react";
import CurrentDate from "./Time components/CurrentDate";
import CurrentTime from "./Time components/CurrentTime";

const DateTime = () => {
  const date = new Date(); // Create a single Date object to be shared

  return (
    <div style={{ color: "#fff" }}>
      <CurrentDate date={date} />
      <CurrentTime date={date} />
    </div>
  );
};

export default DateTime;