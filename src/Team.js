import React from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

const Team = () => {
  const navigate = useNavigate();
  const main = () => {
    navigate("/", { replace: true });
  }

  return (
    <div>
      <button onClick={main}> Retour</button>
      <div className="container">
        <h2>Kény HENRY</h2>
        <p>0640292594</p>
        <h2>Cédric ZOU</h2>
        <p>0640292594</p>
        <h2>Inasse HENRY</h2>
        <p>0640292594</p>
      </div>
    </div>
  );
};

export default Team;