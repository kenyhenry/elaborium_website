import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import './App.css';
import Header from './Header';
import Navbar from './Navbar';

const projects = [
  {
    title: 'Développement de scripts automatisés',
    description: 'Création de scripts personnalisés pour automatiser des tâches répétitives ou complexes.',
    text: '/Contactddd.smdfbDJFBNVLSDJKGHFVLSKDEJHFKASWDEBJVLKASDBVKJB',
  },
  {
    title: "Développement d'applications de bureau",
    description: "Création d'applications de bureau pour répondre aux besoins spécifiques d'une entreprise.",
    text: 'https://exemple.com/projet2',
  },
  {
    title: "Développement d'applications web",
    description: " Création d'applications web sur mesure, telles que des sites web interactifs ou des portails clients.",
    text: 'https://exemple.com/projet3',
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

  return (
    <div className="container">
      <Navbar></Navbar>
      <Header></Header>

      <p className="global-description">
      Nous proposons une prestation de service en mode agile pour accompagner votre entreprise dans la réalisation de vos projets.
      </p>
      <p className="global-description">
      Nous favorisons la transparence, la communication régulière et la collaboration étroite avec vos équipes.
      </p>
      <p className="global-description">
      Vous bénéficierez d'une approche itérative et incrémentale, d'une amélioration continue et d'une meilleure maîtrise des risques.
      </p>
      <p className="global-description">
      Facturation par fonctionnalité, nous facturons en fonction des fonctionnalités livrées et acceptées.
      </p>
      <h2>
        Nos Offres
      </h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
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
          {project.extended && ('\n') && (project.text)}
          </p>
        </div>
      ))}
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
  );
};

export default Main;
