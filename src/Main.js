import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    title: 'Développement de scripts automatisés',
    description: 'Création de scripts personnalisés pour automatiser des tâches répétitives ou complexes.',
    link: 'https://exemple.com/projet1',
  },
  {
    title: "Développement d'applications de bureau",
    description: "Création d'applications de bureau pour répondre aux besoins spécifiques d'une entreprise.",
    link: 'https://exemple.com/projet2',
  },
  {
    title: "Développement d'applications web",
    description: " Création d'applications web sur mesure, telles que des sites web interactifs ou des portails clients.",
    link: 'https://exemple.com/projet3',
  },
  {
    title: "Développement de logiciels personnalisés",
    description: " Création de logiciels sur mesure répondant aux besoins uniques d'une entreprise, avec une interface graphique conviviale.",
    link: 'https://exemple.com/projet3',
  },
  {
    title: 'Intégration de systèmes',
    description: "Intégration de différentes applications et systèmes existants pour améliorer l'efficacité et la productivité de l'entreprise.",
    link: 'https://exemple.com/projet3',
  },
  {
    title: 'Optimisation des performances',
    description: " Analyse et amélioration des performances des applications existantes pour assurer une utilisation plus efficace des ressources.",
    link: 'https://exemple.com/projet3',
  },
  {
    title: 'Sécurité des applications',
    description: " Audit et renforcement de la sécurité des applications et des systèmes pour protéger les données sensibles de l'entreprise.",
    link: 'https://exemple.com/projet3',
  },
  {
    title: 'Migration de données',
    description: "Assistance lors de la migration de données d'un système à un autre, en garantissant la cohérence et l'intégrité des données.",
    link: 'https://exemple.com/projet3',
  },
  {
    title: 'Formation et support technique',
    description: "Fourniture de formations et de support technique pour aider les utilisateurs à tirer le meilleur parti des applications développées.",
    link: 'https://exemple.com/projet3',
  },
  {
    title: "Développement d'applications mobiles (Indisponible)",
    description: "Création d'applications mobiles pour les plateformes iOS et Android, offrant des fonctionnalités spécifiques à l'entreprise.",
    link: '',
  },
];

const Main = () => {
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
          <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
            Voir l'offre
          </a>
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
