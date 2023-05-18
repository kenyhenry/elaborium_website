import React from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.css';

function NavBar({ history }) {
  const navigate = useNavigate();

  const who = (event) => {
    event.preventDefault();
    who.current.scrollIntoView({ behavior: 'smooth' });
  }
  const offers = (event) => {
    event.preventDefault();
    offers.current.scrollIntoView({ behavior: 'smooth' });
  }
  const contact = (event) => {
    event.preventDefault();
    contact.current.scrollIntoView({ behavior: 'smooth' });
  }
  const rea = () => {
    navigate("/Realisation", { replace: true });
  }

  return (
    <div>
      <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <button onClick={who}> Qui sommes-nous ?</button>
        </li>
        <li className="nav-item">
          <button onClick={offers}> Nos offres</button>
        </li>
        <li className="nav-item">
          <button onClick={contact}> Contact</button>
        </li>
        <li className="nav-item">
          <button onClick={rea}> Réalisation</button>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default NavBar;