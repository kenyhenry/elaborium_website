import React from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';
import nexter_img from './images/nexter.jpg';
import dassault_img from './images/avion.jpg';
import sagemcom_img from './images/sagem.png';
import vedecom_img from './images/vedecom.jpg';
import gearo_img from './images/gear-o-logo.png';
import crypteral_img from './images/crypteral.jpg';
// import gaya_img from './images/myImage.png';
// import ctj_img from './images/myImage.png';

const Realisation = () => {
  const navigate = useNavigate();
  const main = () => {
    navigate("/", { replace: true });
  }

  return (
    <div>
      <button onClick={main}> Return</button>
      <div className="container">
        <h2>Nexter Système</h2>
        <img alt="nexter" src={nexter_img}></img>
        <p></p>
        <h2>Dassault Aviation</h2>
        <img alt="dassault" src={dassault_img} style={{width:"450px"}}></img>
        <h2>Sagemcom</h2>
        <img alt="sagemcom" src={sagemcom_img} style={{width:"450px"}}></img>
        <h2>Vedecom</h2>
        <img alt="vedecom" src={vedecom_img} style={{width:"450px"}}></img>
        <h2>GearO</h2>
        <img alt="gearo" src={gearo_img} style={{width:"300px"}}></img>
        <h2>Crypteral</h2>
        <img alt="crypteral" src={crypteral_img} style={{width:"450px"}}></img>
        {/* <h2>Gaya</h2>
        <h2>Ctj</h2> */}
      </div>
    </div>
  );
};

export default Realisation;