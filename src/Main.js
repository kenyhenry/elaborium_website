import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import './Main.css';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaEnvelope, FaCalendarAlt, FaClipboardList, FaCode } from "react-icons/fa";
import Header from './Header';

const Main = () => {
  const navigate = useNavigate();

  const icons = [
    <FaCalendarAlt size={32} />, // Icon for button 1
    <FaGithub size={32} />,     // Icon for button 2
    <FaDiscord size={32} />,    // Icon for button 3
    <FaInstagram size={32} />,  // Icon for button 4
    <FaLinkedin size={32} />,   // Icon for button 5
    <FaClipboardList size={32} />, // Icon for button 6
    <FaCode size={32} />,       // Icon for button 7
    <FaEnvelope size={32} />,   // Icon for button 8
  ];
  const textButton = ['Rendez-vous', 'GitHub', 'Discord', 'Instagram', 'LinkedIn', 'Offre', 'Réalisation', 'Contact'];

  const handleClick = (buttonIndex) => {
    if (buttonIndex === 0) {
      window.open("https://calendly.com/kenyh/45min", '_blank', 'noopener noreferrer');
    } else if (buttonIndex === 1) {
      window.open("https://github.com/kenyhenry", '_blank', 'noopener noreferrer');
    } else if (buttonIndex === 2) {
      window.open("https://discord.gg/2cWNTb2A", '_blank', 'noopener noreferrer');
    } else if (buttonIndex === 3) {
      window.open("https://www.instagram.com/keet_stack?igsh=MTU1cm5vcWg0MWJnbw==", '_blank', 'noopener noreferrer');
    } else if (buttonIndex === 4) {
      window.open("https://www.linkedin.com/in/keny-h-69b373101/", '_blank', 'noopener noreferrer');
    } else if (buttonIndex === 5) {
      navigate('./Website');
    } else if (buttonIndex === 6) {
      navigate('./Realisation');
    } else if (buttonIndex === 7) {
      navigate('./Website');
    }
  };

  return (
    <div id='div'>
      <div>
      <Header></Header>
        <div className="card-container">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleClick(index)}
            >
              <div className="card-icon">{icon}</div>
              <div className="card-text">{textButton[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
