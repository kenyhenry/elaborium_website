import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Main.css';
// import './wave_button.scss';
import "./CircleButtons.css";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaEnvelope, FaCalendarAlt, FaClipboardList, FaCode } from "react-icons/fa";
import logo from "./images/elaborium_logo.png";

const Main = () => {
  const navigate = useNavigate();
  const [radius, setRadius] = useState(300)

  useEffect(() => {
    const buttons = document.querySelectorAll('.custom-button');
    let maxWidth = 0;

    const updateRadius = () => {
      const screenWidth = window.innerWidth;
      setRadius(screenWidth < 768 ? 140 : 300); // Smaller radius for small screens
    };

    updateRadius(); // Run on load
    window.addEventListener('resize', updateRadius); // Update on resize

    return () => window.removeEventListener('resize', updateRadius);

    buttons.forEach((button) => {
      maxWidth = Math.max(maxWidth, button.scrollWidth);
    },[]);


    buttons.forEach((button) => {
      button.style.width = `${maxWidth}px`;
      button.style.margin = `10px`;
    });
  }, []);
  const numButtons = 8;
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
  const textButton = ['rendez-vous', 'github', 'discord', 'instagram', 'linkedin', 'offre', 'réalisation', 'contact']
  const buttons = Array.from({ length: numButtons }, (_, i) => i);

  const handleClick = (buttonIndex) => {
    if(buttonIndex === 0){
      window.open("https://calendly.com/kenyh/45min", '_blank', 'noopener noreferrer');
    }else if(buttonIndex === 1){
      window.open("https://github.com/kenyhenry", '_blank', 'noopener noreferrer');
    }else if(buttonIndex === 2){
      window.open("https://discord.gg/Z3kGNXRG", '_blank', 'noopener noreferrer');
    }else if(buttonIndex === 3){
      window.open("https://instagram.com/elaborium_dev?igshid=NTc4MTIwNjQ2YQ==", '_blank', 'noopener noreferrer');
    }else if(buttonIndex === 4){
      window.open("https://www.linkedin.com/in/keny-h-69b373101/", '_blank', 'noopener noreferrer');
    }else if(buttonIndex === 5){
      navigate('./Website')
    }else if(buttonIndex === 6){
      navigate('./Realisation')
    }else if(buttonIndex === 7){
      navigate('./Website');
    }
  };

  return (
    <div id='div'>
      <div id='main_div'>        
        <div className="circle-container">
          <div>
            {/* <center>
            <img src={logo} alt="" style={{width:"13vh", height:"auto"}}></img>
            </center> */}
            {/* <h1 className="mainh1">Expertise Logiciel</h1> */}
          </div>
          {buttons.map((btn, index) => {
            const angle = (2 * Math.PI * index) / numButtons; // Calculate angle in radians
            const x = radius * Math.cos(angle); // X position
            const y = radius * Math.sin(angle); // Y position
          
            return (
                <button
                  key={index}
                  className="circle-button"
                  style={{
                    position: "absolute",
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  onClick={() => handleClick(index)}
                >
                  <div>
                    {icons[index]}
                  </div>
                  <div>
                    {`${textButton[index ]}`}
                  </div>
                </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
