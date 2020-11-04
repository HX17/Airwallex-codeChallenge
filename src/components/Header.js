import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        borderBottom: ".5px solid grey",
        width: "100%",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#111",
        color: "#ccc",
      }}
    >
      <p>BROCCOLI & CO.</p>
    </div>
  );
};

export default Header;
