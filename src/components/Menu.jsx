import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ list }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {list.map((item, index) => (
        <li key={index}>
          <MenuItem text={item.text} url={item.url} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;