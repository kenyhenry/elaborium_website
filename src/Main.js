import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import './Main.css';
import './wave_button.scss';

const Main = () => {

  useEffect(() => {
    const buttons = document.querySelectorAll('.custom-button');
    let maxWidth = 0;

    buttons.forEach((button) => {
      maxWidth = Math.max(maxWidth, button.scrollWidth);
    });

    buttons.forEach((button) => {
      button.style.width = `${maxWidth}px`;
      button.style.margin = `20px`;
    });
  }, []);

  return (
    <div id='div'>
      <div id='main_div'>
      <h1>Expert Logiciel</h1>
      <h2 style={{color: 'white', marginBottom:'30px'}}>Kény</h2>
        <Link to="/">
          <button className="kave-btn">Créneaux rendez-vous</button>
        </Link>
        <Link to="/Website">
          <button className="kave-btn">Website</button>
        </Link>
        <a href="https://github.com/kenyhenry" target="_blank" rel="noopener noreferrer">
          <button className="kave-btn">Github</button>
        </a>
        <a href="https://kenyhenry.github.io/gearo/" target="_blank" rel="noopener noreferrer">
          <button className="kave-btn">GearO</button>
        </a>
        <a href="https://instagram.com/elaborium_dev?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
          <button className="kave-btn">Instagram</button>
        </a>
      </div>
    </div>
  );
};

export default Main;
