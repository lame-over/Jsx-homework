import React from "react";
import { connect } from "react-redux";
import MenuItem from "./MenuItem";

const Menu = ({ menuItems }) => {

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

// Функція для отримання даних з Redux
const mapStateToProps = (state) => ({
  menuItems: state.menu.menuItems,
});

// Підключення компонента до Redux
export default connect(mapStateToProps)(Menu);