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
    text: "Grâce à mon expertise approfondie dans les langages de script tels que Python, JavaScript, PowerShell, et bien d'autres, je suis en mesure de concevoir des solutions automatisées qui accélèrent les workflows, réduisent les erreurs humaines et optimisent les opérations quotidiennes. Que ce soit pour l'automatisation de tâches de gestion, le déploiement de logiciels, la collecte de données ou la manipulation de fichiers, je suis en mesure de créer des scripts sur mesure qui répondent à vos exigences.Faites confiance à mon expertise et à mon expérience pour vous fournir des solutions efficaces qui vous permettront de gagner du temps, d'augmenter votre productivité et de libérer vos ressources pour des activités à plus forte valeur ajoutée.",
    price: "50"
  },
  {
    title: "Développement d'applications de bureau/web",
    description: "Création d'applications de bureau pour répondre aux besoins spécifiques d'une entreprise.",
    text: `Je suis dédiés à la construction d'applications robustes, fonctionnelles et intuitives pour répondre aux besoins spécifiques de mes clients. j'excelle dans le développement d'applications de bureau qui fonctionnent sur les systèmes d'exploitation courants tels que Windows, macOS et Linux. Je maîtrise les technologies et les langages de programmation nécessaires pour créer des applications de bureau performantes, fiables et personnalisées. Le titre "Développement d'applications de bureau/web" décrit mon expertise et ma spécialisation dans la création et la conception d'applications logicielles à la fois pour les environnements de bureau et web.
    Que ce soit pour des sites web interactifs, des applications SaaS (Software-as-a-Service) ou des solutions basées sur le cloud, J'ai acquis une expertise approfondie dans les technologies web modernes telles que HTML, CSS, JavaScript, ainsi que les frameworks et bibliothèques populaires comme React, Angular et VueJS.
    En combinant mon savoir-faire dans le développement d'applications de bureau et web, Je suis en mesure de proposer des solutions complètes qui répondent aux besoins variés de mes clients. Je travaille en étroite collaboration avec mes clients pour comprendre leurs objectifs, leurs spécifications et leurs contraintes, afin de créer des applications sur mesure qui offrent une expérience utilisateur exceptionnelle et répondent à leurs exigences fonctionnelles et techniques.
    mon approche de développement se base sur les meilleures pratiques de l'industrie, la qualité du code, les tests rigoureux et la sécurité des applications. Je m'engage à livrer des applications de bureau et web performantes, évolutives et faciles à maintenir.
    Que ce soit pour automatiser des processus métier, améliorer l'efficacité opérationnelle, offrir une expérience utilisateur optimale ou créer des outils sur mesure, Je suis là pour transformer vos idées en réalité à travers mes compétences en développement d'applications de bureau/web.`,
    price: "100"
  },
  {
    title: "Développement de logiciels/backend personnalisés",
    description: "Création de logiciels sur mesure répondant aux besoins uniques d'une entreprise, avec une interface graphique conviviale.",
    text: `Pensez-y comme à la création d'un moteur puissant qui alimente tout le fonctionnement d'un site web ou d'une application, mais de manière invisible pour les utilisateurs. Ce moteur personnalisé est conçu pour gérer les tâches complexes et les bases de données, traiter les informations, et garantir que tout fonctionne de manière fluide et sans accrocs.
    Prenons l'exemple d'une entreprise de vente en ligne de vêtements qui souhaite développer un logiciel/backend personnalisé pour gérer ses stocks et ses commandes de manière efficace.
    L'équipe de développement travaillerait à la création d'un système sur mesure qui permettrait à l'entreprise de suivre en temps réel les niveaux de stock de chaque article, de gérer les commandes des clients et de coordonner l'expédition des produits.
    Le logiciel/backend personnalisé serait conçu pour offrir des fonctionnalités spécifiques à l'entreprise, telles que :
    Gestion des stocks : Le système permettrait de suivre le nombre de chaque article en stock, d'enregistrer les entrées et les sorties, et d'envoyer des alertes lorsque les niveaux de stock sont bas.
    Traitement des commandes : Lorsqu'un client passe une commande, le logiciel/backend personnalisé enregistrerait les détails de la commande, vérifierait la disponibilité des articles et mettrait à jour les stocks en conséquence. Il pourrait également générer automatiquement des factures et des bons de livraison.
    Gestion des expéditions : Le système aiderait à coordonner les expéditions en générant des étiquettes d'expédition, en suivant les colis et en mettant à jour les statuts de livraison. Cela permettrait à l'entreprise et aux clients de suivre l'avancement des expéditions.
    Rapports et analyses : Le logiciel/backend personnalisé pourrait fournir des rapports détaillés sur les ventes, les tendances des produits, les performances du stock, etc. Cela aiderait l'entreprise à prendre des décisions éclairées pour optimiser ses opérations.
    En développant un logiciel/backend personnalisé, l'entreprise pourrait bénéficier d'un système adapté à ses besoins spécifiques, offrant une meilleure gestion des stocks, une automatisation des processus et une optimisation des opérations. Cela lui permettrait d'améliorer l'efficacité de son activité, de réduire les erreurs et d'offrir une meilleure expérience client.
    En résumé, le développement de logiciels/backend personnalisés consiste à créer un moteur spécialisé qui alimente les sites web et les applications en coulisses, en leur offrant des fonctionnalités avancées et en répondant aux besoins spécifiques de l'entreprise. C'est comme construire un moteur sur mesure pour faire fonctionner les choses en douceur et de manière optimale.`,
    price: "200"
  },
  {
    title: 'Intégration de systèmes',
    description: "Intégration de différentes applications et systèmes existants pour améliorer l'efficacité et la productivité de l'entreprise.",
    text: `L'intégration de systèmes, c'est comme mettre ensemble différents ordinateurs, logiciels et appareils pour qu'ils puissent travailler ensemble. C'est un peu comme connecter des pièces de puzzle pour créer un ensemble cohérent.
    L'idée est de faire en sorte que ces différents systèmes puissent communiquer entre eux et partager des informations de manière fluide. Cela permet d'éviter les répétitions inutiles de tâches et de rendre les choses plus efficaces.
    L'intégration de systèmes peut se faire à l'intérieur d'une entreprise, par exemple en connectant les différentes applications utilisées par les employés. Cela permet d'avoir un seul endroit où toutes les informations sont disponibles, ce qui facilite le travail.
    Elle peut aussi se faire entre différentes entreprises, par exemple lorsqu'elles ont besoin de partager des informations ou de travailler ensemble sur un projet commun. Cela permet de simplifier les échanges et de collaborer plus facilement.
    L'intégration de systèmes nécessite des personnes qui comprennent comment faire fonctionner tous ces éléments ensemble. Elles doivent s'assurer que les différents systèmes peuvent se comprendre et échanger des informations de manière sécurisée.
    En résumé, l'intégration de systèmes consiste à connecter et faire travailler ensemble différents ordinateurs, logiciels et appareils, afin de rendre les choses plus simples, plus efficaces et de permettre une meilleure collaboration.`,
    price: "300"
  },
  {
    title: 'Optimisation des performances',
    description: " Analyse et amélioration des performances des applications existantes pour assurer une utilisation plus efficace des ressources.",
    text: `L'optimisation des performances est une pratique qui vise à améliorer la vitesse, l'efficacité et la réactivité d'un système, d'un site web, d'une application ou d'un processus. L'objectif principal est d'obtenir une meilleure expérience utilisateur en réduisant les temps de chargement, en augmentant la fluidité des interactions et en minimisant les erreurs ou les ralentissements.
    L'optimisation des performances consiste à examiner en détail chaque aspect du système ou de l'application, en identifiant les goulots d'étranglement et les problèmes qui ralentissent les performances. Cela peut inclure l'analyse du code source, l'optimisation des requêtes de base de données, la compression des fichiers, la mise en cache des données fréquemment utilisées, l'optimisation des images et des ressources, ainsi que l'amélioration de l'architecture et de l'infrastructure sous-jacente.
    Lorsque l'optimisation des performances est appliquée avec succès, les utilisateurs peuvent profiter d'une expérience plus fluide et réactive, avec des temps de chargement plus courts, des transitions plus fluides entre les pages, une navigation plus intuitive et une utilisation générale plus agréable. Cela peut également contribuer à réduire la consommation de bande passante, à économiser des ressources matérielles et à améliorer l'efficacité globale du système.
    L'optimisation des performances est essentielle dans le domaine du développement logiciel et de la création de sites web, car elle permet de répondre aux attentes croissantes des utilisateurs en matière de rapidité et de fluidité. Elle est particulièrement importante pour les sites web et les applications qui gèrent de grandes quantités de données, des interactions complexes ou qui doivent prendre en charge un grand nombre d'utilisateurs simultanément.`,
    price: "700"
  },
  {
    title: 'Sécurité des applications',
    description: " Audit et renforcement de la sécurité des applications et des systèmes pour protéger les données sensibles de l'entreprise.",
    text: `La sécurité des applications concerne la protection des applications informatiques contre les menaces et les attaques potentielles, afin de préserver la confidentialité, l'intégrité et la disponibilité des données.
    Lorsque nous utilisons des applications, que ce soit sur mon téléphone, mon ordinateur ou sur le Web, nous voulons nous assurer que nos informations personnelles et nos données sensibles sont en sécurité. La sécurité des applications vise à garantir que les informations que nous partageons avec ces applications sont protégées et utilisées de manière appropriée.
    Pour assurer la sécurité des applications, différentes mesures sont mises en place :
    Authentification et autorisation, Chiffrement des données, Gestion des vulnérabilités, Protection contre les attaques, Sensibilisation à la sécurité.
    En résumé, la sécurité des applications est essentielle pour protéger les données personnelles et sensibles des utilisateurs. Elle implique l'utilisation de techniques de protection telles que l'authentification, le chiffrement, la gestion des vulnérabilités et la protection contre les attaques. La sécurité des applications vise à garantir que les utilisateurs peuvent faire confiance aux applications qu'ils utilisent et à protéger leurs informations contre les menaces potentielles.`,
    price: "800"
  },
  {
    title: 'Migration de données',
    description: "Assistance lors de la migration de données d'un système à un autre, en garantissant la cohérence et l'intégrité des données.",
    text: `La migration de données est un processus crucial lorsqu'il s'agit de transférer des informations d'un système à un autre. Que vous passiez à une nouvelle plateforme, une nouvelle application ou que vous fusionniez des bases de données, la migration de données garantit un transfert fluide et précis de vos précieuses informations.
    La migration de données implique plusieurs étapes clés. Tout d'abord, il est essentiel de comprendre les besoins et les objectifs de votre migration. Cela inclut l'identification des données à migrer, la définition des règles de transformation ou de conversion nécessaires et la planification de la période de transition.
    Ensuite, vient l'étape de l'extraction des données à partir de la source d'origine. Cela peut impliquer l'extraction de données à partir de fichiers, de bases de données, de systèmes en ligne, ou même de sources externes. Une fois les données extraites, elles doivent être nettoyées, transformées et préparées pour le chargement dans le nouveau système.
    La troisième étape est le chargement des données dans le système cible. Cela peut nécessiter des processus de validation, de correspondance et de mapping pour assurer l'intégrité des données migrées. Il est important de réaliser des tests et des vérifications rigoureuses pour s'assurer que toutes les données ont été transférées correctement et qu'elles sont conformes aux attentes.
    Enfin, une fois la migration terminée, il est essentiel de surveiller et de valider les données dans le nouveau système pour s'assurer qu'elles fonctionnent correctement et qu'elles sont cohérentes. Tout problème ou incohérence doit être résolu rapidement pour éviter toute perturbation des opérations commerciales.
    La migration de données est une tâche complexe qui requiert une planification minutieuse, une expertise technique et une gestion rigoureuse. En confiant cette tâche à des professionnels expérimentés, vous pouvez vous assurer que vos données sont migrées en toute sécurité, avec précision et sans interruption de vos activités quotidiennes.
    Je possède l'expertise et les outils nécessaires pour gérer votre migration de données de manière efficace et transparente. Que ce soit pour une migration vers une nouvelle plateforme, une consolidation de bases de données ou une mise à niveau de système, je suis là pour vous accompagner à chaque étape du processus.
    Faites confiance à mon expertise en migration de données pour vous aider à réaliser une transition sans heurts, tout en préservant l'intégrité et la valeur de vos précieuses informations. Contactez-moi dès aujourd'hui pour discuter de vos besoins en migration de données et découvrir comment je peux vous aider à atteindre vos objectifs.`,
    price: "500"
  },
  // {
  //   title: 'Formation et support technique',
  //   description: "Fourniture de formations et de support technique pour aider les utilisateurs à tirer le meilleur parti des applications développées.",
  //   text: `La formation technique est essentielle pour développer et renforcer les compétences techniques nécessaires dans le monde en constante évolution de la technologie. Que vous soyez un professionnel cherchant à approfondir vos connaissances ou une entreprise souhaitant former ses employés, les formations techniques offrent de nombreux avantages.
  //   Les formations techniques vous permettent d'acquérir une expertise dans des domaines tels que la programmation, le développement web, la cybersécurité, l'intelligence artificielle, les réseaux informatiques et bien d'autres. Elles vous fournissent les connaissances et les compétences nécessaires pour comprendre et maîtriser les outils, les langages de programmation et les technologies actuelles.
  //   L'avantage d'une formation technique est qu'elle est axée sur la pratique. Vous apprendrez à travers des exercices, des projets et des mises en situation réelles, ce qui vous permettra d'appliquer immédiatement ce que vous avez appris. Cela favorise une compréhension approfondie et une acquisition rapide des compétences nécessaires pour réussir dans le domaine technique.
  //   Les formations techniques sont également flexibles, vous permettant de choisir le contenu et le niveau qui correspondent le mieux à vos besoins. Que vous soyez débutant ou expérimenté, il existe des formations adaptées à tous les niveaux. De plus, de nombreux programmes de formation offrent des options en ligne, vous permettant d'apprendre à votre propre rythme et selon votre propre emploi du temps.
  //   Investir dans une formation technique présente de nombreux avantages. Cela peut vous aider à améliorer votre employabilité en développant des compétences recherchées sur le marché du travail. Les employeurs apprécient les candidats qui possèdent des compétences techniques solides, et une formation dans ce domaine peut vous démarquer des autres candidats.
  //   Pour les entreprises, former votre équipe aux compétences techniques renforce votre avantage concurrentiel. Cela permet à vos employés d'être plus productifs, d'adopter de nouvelles technologies et de résoudre efficacement les problèmes techniques. Une équipe bien formée contribue à l'innovation, à la croissance de l'entreprise et à l'atteinte des objectifs.`,
  //   price: ""
  // },
  {
    title: "Développement d'applications mobiles",
    description: "Création d'applications mobiles pour les plateformes iOS et Android, offrant des fonctionnalités spécifiques à l'entreprise.",
    text: `Le développement d'applications mobiles est un domaine en plein essor qui permet de créer des applications pour les smartphones et les tablettes. Ces applications offrent une expérience utilisateur optimisée et permettent aux utilisateurs d'accéder à des fonctionnalités spécifiques directement depuis leurs appareils mobiles.
    Que vous soyez une entreprise cherchant à développer une application pour vos clients ou un entrepreneur avec une idée innovante, le développement d'applications mobiles offre de nombreuses opportunités.
    Les applications mobiles peuvent être développées pour les plateformes iOS (iPhone et iPad) et Android, couvrant ainsi une large gamme d'appareils. Elles peuvent offrir des fonctionnalités variées, telles que la réservation de services, le shopping en ligne, la gestion de tâches, les médias sociaux, les jeux, les services de localisation, et bien plus encore.
    L'un des avantages clés du développement d'applications mobiles est sa portabilité. Les applications mobiles sont conçues pour fonctionner spécifiquement sur des appareils mobiles, en tirant parti de leurs fonctionnalités telles que les écrans tactiles, les capteurs et les fonctionnalités de géolocalisation. Cela permet une expérience utilisateur optimisée et une utilisation pratique pour les utilisateurs finaux.
    Lors du développement d'une application mobile, il est important de prendre en compte la conception, l'expérience utilisateur, la sécurité et les performances. Une conception intuitive et attrayante garantit une navigation aisée et une expérience agréable pour les utilisateurs. La sécurité des données est primordiale pour protéger les informations sensibles des utilisateurs. Enfin, des performances optimales, avec des temps de chargement rapides et une réactivité fluide, sont essentielles pour offrir une expérience utilisateur de qualité.
    Que vous souhaitiez développer une application pour votre entreprise ou lancer une startup axée sur les applications mobiles, je peux vous accompagner tout au long du processus de développement.
    mon approche agile et mon expertise technique me permet de développer des applications mobiles de haute qualité, adaptées à vos besoins spécifiques. Je prends en compte les dernières tendances du marché, les meilleures pratiques de développement et les exigences spécifiques de votre projet pour vous offrir une solution sur mesure.
    Contactez-moi dès aujourd'hui pour discuter de votre projet d'application mobile et découvrir comment je peux vous aider à le concrétiser. Ensemble, nous pouvons créer une application mobile performante, attrayante et répondant aux attentes de vos utilisateurs.`,
    price: "200"
  },
  {
    title: "Solutions embarquées/Objets connectés",
    description: "Systèmes embarqués, technologie qui permet de créer des appareils intelligents et connectés.",
    text: `Je suis spécialisés dans les solutions embarquées, qui consistent à intégrer des composants matériels et logiciels dans des appareils intelligents et autonomes. Grâce à cette technologie, vous pouvez bénéficier de nombreuses possibilités dans divers domaines tels que les objets connectés, l'automatisation industrielle, les dispositifs médicaux, la sécurité, et bien plus encore.
    je suis là pour vous conseiller et concevoir des solutions sur mesure en fonction de vos besoins et objectifs. Je travaille en étroite collaboration avec vous pour comprendre vos exigences et définir une architecture adaptée à votre projet. Vous pouvez compter sur mon expertise technique et mon expérience pour réaliser une solution embarquée de qualité.
    En choisissant mes services, vous bénéficiez d'une série d'avantages. Je suis les dernières avancées technologiques pour vous offrir des solutions à la pointe de l'innovation. mon objectif est de vous fournir des solutions fiables et performantes qui répondent à vos attentes. Je vous offre un suivi continu tout au long du processus, de la conception à la mise en production, et je suis là pour vous soutenir techniquement et répondre à vos questions.
    Je suis déterminés à fournir des solutions accessibles à tous, sans jargon technique compliqué. Je suis là pour vous guider et vous expliquer chaque étape du processus de manière claire et compréhensible. Je souhaite que vous vous sentiez à l'aise et en confiance avec moi.
    N'hésitez pas à me contacter dès aujourd'hui pour discuter de votre projet de solution embarquée. Ensemble, nous réaliserons une technologie intelligente et connectée qui répondra à vos besoins et vous aidera à atteindre vos objectifs technologiques.`,
    price: "400"
  },
];

const Website = () => {
  const navigate = useNavigate();

  const who_div = useRef(null);
  const offers_div = useRef(null);
  const contact_div = useRef(null);

  const who = (event) => {
    event.preventDefault();
    who_div.current.scrollIntoView({ behavior: 'smooth' });
  }
  const offers = (event) => {
    event.preventDefault();
    offers_div.current.scrollIntoView({ behavior: 'smooth' });
  }
  const contact = (event) => {
    event.preventDefault();
    contact_div.current.scrollIntoView({ behavior: 'smooth' });
  }
  const rea = () => {
    navigate("/Realisation", { replace: true });
  }

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div>
      <nav className="navbar">
      <div className="navbar-logo"></div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </button>
      <ul  className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          {/* <button onClick={who}> Qui sommes-nous ?</button> */}
        </li>
        <li className="nav-item">
          <button onClick={offers}> Mes offres</button>
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
        {/* add some text*/}
      <div ref={who_div} className="container">
      {/* <h2 style={{textAlign: "center"}}>
        Qui sommes-nous ?
      </h2> */}
      {/* <p style={{fontSize:"20px"}}>
      nous sommes une entreprise spécialisée dans le développement logiciel, dédiée à la création de solutions innovantes pour répondre aux besoins uniques de nos clients. Avec une équipe talentueuse de développeurs passionnés par la technologie, nous nous efforçons de fournir des produits logiciels de haute qualité qui font la différence.<br></br>
      mon expertise s'étend à travers une gamme de domaines, incluant le développement d'applications web, d'applications mobiles et de logiciels sur mesure. Nous sommes guidés par une approche centrée sur le client, en mettant l'accent sur la compréhension approfondie des besoins de nos clients et en fournissant des solutions personnalisées qui répondent à leurs objectifs.<br></br>
      En travaillant avec nous, vous bénéficiez de mon expérience avérée dans la réalisation de projets de développement logiciel, depuis la conception initiale jusqu'à la mise en œuvre et au-delà. Nous adoptons les meilleures pratiques de l'industrie et utilisons les technologies les plus récentes pour offrir des solutions logicielles robustes, évolutives et sécurisées.<br></br>
      Nous proposons une prestation de service en mode agile pour accompagner votre entreprise dans la réalisation de vos projets.<br></br>
      Nous favorisons la transparence, la communication régulière et la collaboration étroite avec vos équipes.<br></br>
      Vous bénéficierez d'une approche itérative et incrémentale, d'une amélioration continue et d'une meilleure maîtrise des risques.<br></br>
      Facturation par fonctionnalité, nous facturons en fonction des fonctionnalités livrées et acceptées.<br></br>
      Que vous soyez une startup ambitieuse ou une entreprise établie, nous sommes prêts à relever tous les défis de développement logiciel qui se présentent à nous. Contactez-nous dès aujourd'hui pour discuter de vos idées et de vos projets, et laissez-nous vous aider à transformer vos concepts en réalité grâce à mon expertise en développement logiciel.<br></br>
      </p> */}
      </div>
      <div className="container">
      <h2 style={{textAlign:"center"}}>
        Mes Offres
      </h2>
      {/* add price on offers + add description */}
      <div ref={offers_div} className="offers-container">
      {projects.map((project, index) => (
        <div className="offer-item" key={index} style={{ wordWrap: 'break-word' }}>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <button onClick={() => {
            navigate("/Offer", {state:{ title: project.title, text: project.text, price: project.price }});
          }}>
            Voir plus
          </button>
          <p className="project-description">
          {/* {project.price ? */}
          {/* // <p>à partir de {project.price} € / fonctionnalité</p> */}
          {/* // : <p>personnalisé</p>} */}
          </p>
        </div>
      ))}
      </div>
      </div>
      <div ref={contact_div} style={{height:"100%",paddingTop:"10px", alignItems: "center", background:"#333", textAlign:"center"}}>
      <h2 style={{textAlign: "center", color:"white"}}>
        Contact
      </h2>
      <p style={{color:"white"}}>
      Kény HENRY mobile:<a href="tel:+33640292594" className="project-link">+33640292594</a>
      mail:<a href="mailto:henry.keny@outlook.fr" className="project-link">henry.keny@outlook.fr</a>
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
  );
};

export default Website;
