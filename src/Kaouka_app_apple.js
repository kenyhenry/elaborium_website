import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import "./Kaouka.css";
import kaouka_logo from './images/kaouka-logo.png';
import apple_store from './images/App_Store.png';

const Realisation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    window.location.href = 'https://kenyhenry.github.io/elaborium_website/#/Kaouka';
  };

  const main = () => {
    navigate("/Realisation");
  };

  return (
    <div className="centered-container" onClick={handleClick}>
      <div className="centered-content">
        <img alt="kaouka" src={kaouka_logo} loading="lazy" width={100} height={100}></img>
      </div>
      <div className="centered-content">
        <img alt="kaouka" src={apple_store} loading="lazy" width={300}></img>
      </div>
    </div>
  );
};

export default Realisation;
