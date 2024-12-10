    import React from "react";
    import { useSelector } from 'react-redux';
    
    const Logo = () => {
        const logoPath = useSelector((state) => state.logo.logoPath); // Отримуємо шлях з Redux
    return (
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logoPath} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
        <span style={{ fontSize: "1.5em", color: "#fff" }}>My Website</span>
        </a>
    );
    };

    export default Logo;