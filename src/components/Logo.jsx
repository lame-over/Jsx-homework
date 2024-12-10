    import React from "react";
    import { connect } from 'react-redux';
    

    const Logo = ({ logoPath }) => {
        return (
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logoPath} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
        <span style={{ fontSize: "1.5em", color: "#fff" }}>My Website</span>
        </a>
    );
    };

    // Функція для отримання даних з Redux
const mapStateToProps = (state) => ({
    logoPath: state.logo.logoPath,
  });
  
  // Підключення компонента до Redux
export default connect(mapStateToProps)(Logo);

