import React from "react";
import Menu from "./Menu";

const Sidebar = () => {
  const styles = {
    sidebar: {
      width: "250px",
      height: "100vh",
      backgroundColor: "#f4f4f4",
      padding: "20px",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    },
    header: {
      marginBottom: "20px",
      fontSize: "1.5em",
      color: "#333",
    },
  };

  const menuItems = [
    { text: "Головна", url: "/" },
    { text: "Про нас", url: "/about" },
    { text: "Послуги", url: "/services" },
    { text: "Контакти", url: "/contacts" },
    { text: "Зовнішнє посилання", url: "https://google.com" },
    { text: "Без посилання" },
  ];

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.header}>Меню</h2>
      <Menu list={menuItems} />
    </div>
  );
};

export default Sidebar;