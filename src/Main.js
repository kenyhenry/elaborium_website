import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import './App.css';
import './Navbar.css';

import Header from './Header';

const projects = [
  {
    title: 'Développement de scripts automatisés',
    description: 'Création de scripts personnalisés pour automatiser des tâches répétitives ou complexes.',
    text: '/Contactddd.smdfbDJFBNVLSDJKGHFVLSKDEJHFKASWDEBJVLKASDBVKJB',
    price: "200$"
  },
  {
    title: "Développement d'applications de bureau/web",
    description: "Création d'applications de bureau pour répondre aux besoins spécifiques d'une entreprise.",
    text: 'https://exemple.com/projet2',
  },
  {
    title: "Développement de logiciels personnalisés",
    description: " Création de logiciels sur mesure répondant aux besoins uniques d'une entreprise, avec une interface graphique conviviale.",
    text: 'https://exemple.com/projet3',
  },
  {
    title: 'Intégration de systèmes',
    description: "Intégration de différentes applications et systèmes existants pour améliorer l'efficacité et la productivité de l'entreprise.",
    text: 'https://exemple.com/projet3',
  },
  {
    title: 'Optimisation des performances',
    description: " Analyse et amélioration des performances des applications existantes pour assurer une utilisation plus efficace des ressources.",
    text: 'https://exemple.com/projet3',
  },
  {
    title: 'Sécurité des applications',
    description: " Audit et renforcement de la sécurité des applications et des systèmes pour protéger les données sensibles de l'entreprise.",
    text: 'https://exemple.com/projet3',
  },
  {
    title: 'Migration de données',
    description: "Assistance lors de la migration de données d'un système à un autre, en garantissant la cohérence et l'intégrité des données.",
    text: 'https://exemple.com/projet3',
  },
  {
    title: 'Formation et support technique',
    description: "Fourniture de formations et de support technique pour aider les utilisateurs à tirer le meilleur parti des applications développées.",
    text: 'https://exemple.com/projet3',
  },
  {
    title: "Développement d'applications mobiles (Indisponible)",
    description: "Création d'applications mobiles pour les plateformes iOS et Android, offrant des fonctionnalités spécifiques à l'entreprise.",
    text: '',
  },
];

const Main = () => {
  const initialState = Array.from({ length: projects.length }, () => false);
  const [states, setStates] = useState(initialState);

  const navigate = useNavigate();

  const who_div = useRef(null);
  const offers_div = useRef(null);
  const contact_div = useRef(null);

  const who = (event) => {
    // event.preventDefault();
    who_div.current.scrollIntoView({ behavior: 'smooth' });
  }
  const offers = (event) => {
    // event.preventDefault();
    offers_div.current.scrollIntoView({ behavior: 'smooth' });
  }
  const contact = (event) => {
    // event.preventDefault();
    contact_div.current.scrollIntoView({ behavior: 'smooth' });
  }
  const rea = () => {
    navigate("/Realisation", { replace: true });
  }


  return (
    <div>
      <div>

      {/* navbar overflow on mobile */}
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
      <Header></Header>
        {/* add some text + div overflow on mobile*/}
      <div ref={who_div} style={{width: '1000px', margin: '0 auto'}}>
      <h2 style={{textAlign: "center"}}>
        Qui sommes-nous ?
      </h2>
      <p>
      Nous proposons une prestation de service en mode agile pour accompagner votre entreprise dans la réalisation de vos projets.
      </p>
      <p>
      Nous favorisons la transparence, la communication régulière et la collaboration étroite avec vos équipes.
      </p>
      <p>
      Vous bénéficierez d'une approche itérative et incrémentale, d'une amélioration continue et d'une meilleure maîtrise des risques.
      </p>
      <p>
      Facturation par fonctionnalité, nous facturons en fonction des fonctionnalités livrées et acceptées.
      </p>
      </div>
      <div className="container">
      <h2>
        Nos Offres
      </h2>
      {/* add price on offers + add description */}
      <div ref={offers_div} className="offers-container">
      {projects.map((project, index) => (
        <div className="offer-item" key={index} style={{ wordWrap: 'break-word' }}>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          {project.extended= states[index]}
          <button onClick={() => {
            setStates(prevStates => {
              const newStates = [...prevStates];
              newStates[index] = !newStates[index];
              return newStates;
            });
          }}>
            {project.extended ? 'Voir moins' : 'Voir plus'}
          </button>
          <p className="project-description">
          {project.extended && (project.text)}
          <p>arround {project.price}</p>
          </p>
        </div>
      ))}
      </div>
      <div ref={contact_div} style={{width: '1000px', margin: '0 auto'}}>
      <h2 style={{textAlign: "center"}}>
        Contact
      </h2>
      {/* link on mobil to call directly same with mail address */}
      <p className="project-description">
      Kény HENRY mobile:0640292594 mail:henry.keny@outlook.fr
      </p>
      <footer className="footer">
        <ul className="social-icons">
          <li>
            <a href="https://github.com/kenyhenry" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/keny-h-69b373101/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} />
            </a>
          </li>
        </ul>
        <p>© 2023 Kény HENRY. Tous droits réservés.</p>
      </footer>
      </div>
      </div>
    </div>
  );
};

export default Main;
