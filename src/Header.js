import React from "react";
import backgroundImage from "./background/11.jpg";
import logo from "./images/elaborium_logo.png";
import TypingAnimation from './TypingText';
import './App.css';

function Header() {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <header style={headerStyle}>
      <div>
      <img src={logo} alt="" style={{width:"100px", height:"auto"}}></img>
      <h1 style={{fontSize:"80px", marginTop:"0px"}}>
        <TypingAnimation text="Expertise Logiciel" speed={100} />
      </h1>
      <h2 style={{color:"white", fontSize:"40px"}}>
        Kény HENRY
      </h2>
      </div>
    </header>
  );
}

export default Header;