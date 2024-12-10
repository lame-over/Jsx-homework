import React from "react";
import Logo from "./Logo";
import DateTime from "./DateTime";


function Header() {
  return (
    <header style={styles.header}>
      <Logo src="./images.png" /> {/* Replace with the actual path to your logo */}
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#home" style={styles.link}>Головна</a></li>
          <li style={styles.navItem}><a href="#about" style={styles.link}>Про нас</a></li>
          <li style={styles.navItem}><a href="#services" style={styles.link}>Послуги</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.link}>Контакти</a></li>
        </ul>
      </nav>
      <DateTime /> {/* Add DateTime component to the right side of the header */}
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#282c34",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#61dafb",
    transition: "color 0.3s",
  },
};

export default Header;