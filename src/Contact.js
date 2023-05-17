import React from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

const Contact = () => {
  const navigate = useNavigate();
  const main = () => {
    navigate("/", { replace: true });
  }

  return (
    <div>
      <button onClick={main}> Return</button>
      <div classname="container">
        <p>Dans les méthodes Agile, le paiement est généralement basé sur des itérations ou des livraisons continues plutôt que sur des modèles de paiement traditionnels. Voici quelques approches courantes de paiement utilisées dans les projets Agile :

Facturation au temps et aux matériaux : Dans cette approche, le client est facturé en fonction du temps passé par l'équipe de développement sur le projet et des coûts matériels associés, tels que les licences logicielles ou l'infrastructure. Les paiements sont effectués périodiquement, généralement mensuellement ou selon un autre accord convenu.

Facturation par itération : Dans cette approche, le paiement est basé sur les itérations de développement, qui sont des cycles de travail définis avec des objectifs spécifiques. À la fin de chaque itération, le client peut évaluer les fonctionnalités livrées et procéder au paiement correspondant.

Facturation par livraison : Dans cette approche, le paiement est effectué à chaque livraison de fonctionnalités ou de versions du logiciel. Les paiements peuvent être déclenchés lorsque certaines fonctionnalités ou critères de qualité sont atteints.

Facturation par valeur ajoutée : Cette approche est basée sur la valeur ajoutée par le projet au client ou à l'entreprise. Les paiements peuvent être basés sur les résultats obtenus, tels que l'augmentation des revenus ou des économies réalisées grâce à l'utilisation du logiciel développé.

</p>
      </div>
    </div>
  );
};

export default Contact;