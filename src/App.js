import React from "react";
import Header from "./components/Header";
import Posts from "./components/API/PostComponent"; // Import the Posts component
import Footer from "./components/Footer";
import { Provider } from 'react-redux';
import store from './components/Curency converter/Store';
import CurrencyConverter from './components/Curency converter/CurrencyConverter';

function App() {
  return (
    <div style={styles.app}>
      <Header />
      <main style={styles.main}>
      <Provider store={store}>
      <div>
        <h1>Мій додаток</h1>
        <CurrencyConverter />
      </div>
    </Provider>
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