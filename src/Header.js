import React from "react";
import backgroundImage from "./background/11.jpg"; // Chemin vers votre image de fond
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
      <h1>
        <TypingAnimation text="Expertise Logiciel" speed={100} />
      </h1>
      <h2>
        Kény HENRY
      </h2>
      </div>
    </header>
  );
}

export default Header;