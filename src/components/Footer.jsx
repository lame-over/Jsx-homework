import React from "react";
import Menu from "./Menu";

function Footer() {
  const menuItems = [
    { text: "Політика конфіденційності", url: "#privacy" },
  ];

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 Test. Privacy are protected.</p>
      <div style={styles.links}>
        <Menu list={menuItems} />
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#282c34",
    color: "#fff",
    textAlign: "center",
    padding: "10px 20px",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  text: {
    margin: 0,
    fontSize: "0.9em",
  },
  links: {
    marginTop: "5px",
  },
  link: {
    textDecoration: "none",
    color: "#61dafb",
    fontSize: "0.9em",
    margin: "0 5px",
  },
  separator: {
    color: "#fff",
    margin: "0 5px",
  },
};

export default Footer;
