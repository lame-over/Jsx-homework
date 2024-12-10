    import React from "react";

    const Logo = ({ src }) => {
    return (
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={src} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
        <span style={{ fontSize: "1.5em", color: "#fff" }}>My Website</span>
        </a>
    );
    };

    export default Logo;