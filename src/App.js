import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { getId } from "./components/helpers";

console.log(getId("menu-item"));
console.log(getId("menu-item"));

console.log(getId("abcd"));
console.log(getId("abcd"));
console.log(getId());

function App() {
  return (
    <div style={styles.app}>
      <Header />
      <div style={styles.main}>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  main: {
    display: "flex",
    flex: 1,
    marginTop: "50px", // Відступ для Header
  },
};



export default App;
