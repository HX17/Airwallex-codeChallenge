import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        textAlign: "center",
        height: "10vh",
        borderTop: "1px solid grey",
        width: "100%",
        paddingTop: "12px",
        backgroundColor: "#111",
        color: "#ccc",
      }}
    >
      Made by Xiang Hou <br />© 2020 Copyright All rights reserved
    </div>
  );
};

export default Footer;
