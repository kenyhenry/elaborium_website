import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Offer = (props) => {
  const navigate = useNavigate();
  const main = () => {
    navigate("/", { replace: true });
  };

  const location = useLocation();
  const { title, text, price } = location.state;
  const paragraphs = text.split('.');

  return (
    <div style={{width:"100%"}}>
      <button onClick={main}> Return</button>
      <div style={{width:"100%", textAlign:"center"}}>
        <h2>{title}</h2>
        {/* adjust text */}
        {paragraphs.map((paragraph, index) => (
        <p key={index} style={{fontSize:"20px"}}>{paragraph}.</p>
      ))}
        {/* <h2 style={{fontSize:"40px"}}>à partir de {price} € / fonctionnalité</h2> */}
      </div>
    </div>
  );
};

export default Offer;
