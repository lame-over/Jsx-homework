import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menuItems = useSelector((state) => state.menu.menuItems); // Отримуємо меню з Redux

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <MenuItem text={item.text} url={item.url} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;