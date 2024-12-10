import React from "react";

const MenuItem = ({ text, url }) => {
  const isExternal = url && !url.startsWith(window.location.origin);

  return url ? (
    <a
      href={url}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{
        textDecoration: "none",
        color: "#555",
        display: "block",
        margin: "10px 0",
      }}
    >
      {text}
    </a>
  ) : (
    <span
      style={{
        color: "#555",
        display: "block",
        margin: "10px 0",
      }}
    >
      {text}
    </span>
  );
};

export default MenuItem;