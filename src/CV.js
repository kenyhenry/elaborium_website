import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
// import gearo_img from './images/gear-o-logo.png';
// import crypteral_img from './images/crypteral.jpg';
// import gaya_img from './images/myImage.png';
// import ctj_img from './images/myImage.png';

const CV = () => {
  const navigate = useNavigate();
  const main = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      <button onClick={main}> Return</button>
      <div className="container">
        <h2>Nexter Système</h2>
        {/* <img alt="nexter" src={nexter_img}></img> */}
        <h3>Conception du logiciel d'un char d'assault</h3>
        <p className="global-description">
          • Conception d'une stratégie de test du char
        </p>
        <p className="global-description">
          • Optimisation du logiciel pour du temps réel (contrainte 2ms)
        </p>
        <h2>Dassault Aviation</h2>
        {/* <img alt="dassault" src={dassault_img} style={{width:"450px"}}></img> */}
        <h3>
          Développement d’un logiciel de tableau de bord d'un avion de chasse
        </h3>
        <p className="global-description">
          • Développement d’un générateur de code pour les interfaces
        </p>
        <p className="global-description">
          • Déploiement et compilation du logiciel et essai avec pilote
        </p>
        <p className="global-description">
          • Maintenance et développement d’outils en vue d’automatisation
          continue
        </p>
        <p className="global-description">
          • Modélisation et développement de tableau de bord en environnement
          réel (sur les avions de chasse)
        </p>
        <h2>Sagemcom</h2>
        {/* <img alt="sagemcom" src={sagemcom_img} style={{width:"450px"}}></img> */}
        <h3>Développement d’un logiciel de Soundbox (ex:Livebox)</h3>
        <p className="global-description">
          • Intégration des applications Netflix et Prime vidéo dans soundbox
          (ex: Livebox)
        </p>
        <p className="global-description">
          • Migration d'un navigateur d’une ancienne version à une plus récente
        </p>
        <p className="global-description">
          • Amelioration et Maintient des applications de gestion du système de
          la soundbox
        </p>
        <h2>Vedecom</h2>
        {/* <img alt="vedecom" src={vedecom_img} style={{width:"450px"}}></img> */}
        <h3>Développement d'un pilote automatique voiture</h3>
        <p className="global-description">
          • Reprise d’un logiciel middleware Qt/C++ entre des capteurs type
          Lidar, caméra thermique et un véhicule ou superviseur (système de
          conduite autonome)
        </p>
        <p className="global-description">
          • Publication des données capteur sur broker Mqtt
        </p>
        <p className="global-description">
          • Développement d’outils de mesure nodejs, expressjs, jquery
        </p>
        <p className="global-description">
          • Déploiement d’une infrastructure réseau
        </p>
        <p className="global-description">
          • Conception d’un algorithme de calcul sur un Plan 3d
        </p>
        <p className="global-description">
          • Rédaction d’une documentation pour appel à projet
        </p>
        <h2>GearO</h2>
        {/* <img alt="gearo" src={gearo_img} style={{width:"300px"}}></img> */}
        <h3>Développement d’un jeu video MMPORG Play2Earn cryptomonnaie</h3>
        <p className="global-description">
          • Conception d’un backend NodeJs capable de recevoir des dizaines de
          milliers de connexions en simultané
        </p>
        <p className="global-description">
          • Création de Smart contract avec Solidity
        </p>
        <p className="global-description">
          • Conception du front-end WebApp en ReactJs
        </p>
        <p className="global-description">
          • Conception d’une application native multiplateforme en ElectronJs
        </p>
        <h2>Crypteral</h2>
        {/* <img alt="crypteral" src={crypteral_img} style={{width:"450px"}}></img> */}
        <h3>• Développement d’un robot trading</h3>
        <p className="global-description">
          • Conception de l’algorithme de trading
        </p>
        <p className="global-description">• Prise en main de l’API broker</p>
        {/* <h2>Gaya</h2>
        <h2>Ctj</h2> */}
      </div>
    </div>
  );
};

export default CV;
