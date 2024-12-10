import React from "react";
import Header from "./components/Header";
import Posts from "./components/API/PostComponent"; // Import the Posts component
import Footer from "./components/Footer";


function App() {
  return (
    <div style={styles.app}>
      <Header />
      <main style={styles.main}>
        <Posts /> {/* Render the Posts component */}
      </main>
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
    marginTop: "50px", // Offset for Header
  },
};

export default App;