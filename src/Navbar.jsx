import React from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.css';

function NavBar({ history }) {
  const navigate = useNavigate();

  const rea = () => {
    navigate("/Realisation", { replace: true });
  }
  const team = () => {
    navigate("/Team", { replace: true });
  }
  const contact = () => {
    navigate("/Contact", { replace: true });
  }

  return (
    <div>
      <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <button onClick={rea}> Réalisation</button>
        </li>
        <li className="nav-item">
          <button onClick={team}> Team</button>
        </li>
        {/* <li className="nav-item">
          <button onClick={contact}> Politique</button>
        </li> */}
      </ul>
    </nav>
    </div>
  );
}

export default NavBar;