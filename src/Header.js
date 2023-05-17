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
        Kény HENRY
      </h1>
      <h2>
        <TypingAnimation text="Software Engineer" speed={100} />
      </h2>
      </div>
    </header>
  );
}

export default Header;