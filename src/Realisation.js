import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
// import gearo_img from './images/gear-o-logo.png';
// import crypteral_img from './images/crypteral.jpg';
// import gaya_img from './images/myImage.png';
// import ctj_img from './images/myImage.png';
import kaouka_logo from './images/kaouka-logo.png';

const Realisation = () => {
  const navigate = useNavigate();
  const main = () => {
    navigate("/", { replace: true });
  };

  const goToKaouka = () => {
    navigate("/Kaouka", { replace: true });
  };

  return (
    <div>
      <button onClick={main}> Return</button>
      <div className="container">
        <img alt="kaouka" src={kaouka_logo} loading="lazy" width={150} height={150} onClick={goToKaouka}></img>
        <h3>Kaouka</h3>
      </div>
    </div>
  );
};

export default Realisation;
