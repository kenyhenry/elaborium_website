import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import kaouka_logo from './images/kaouka-logo.png';
import invoice_logo from './images/invoice-logo.png';
// import gearo_img from './images/gear-o-logo.png';

const Realisation = () => {
  const navigate = useNavigate();
  const main = () => {
    navigate("/Website", { replace: true });
  };

  const goTo = (page) => {
    console.log(page);
    navigate("/"+page, { replace: true });
  };

  const projects = [
    {
      title: 'Kaouka',
      img: kaouka_logo,
      description: 'Kaouka est un réseau social qui permet aux utilisateurs de constater les posts des autres utilisateurs en fonction de leurs géolocalisation.',
    },
    {
      title: 'GithubInvoice',
      img: invoice_logo,
      description: 'Github invoice est un outil de facturation qui permet de générer des factures à partir des issues de github.',
    },
  ]

  return (
    <div className="container">
      <button className="button-style" onClick={main}> Return</button>
      <div  className="offers-container">
        {projects.map((project, index) => (
          <div className="offer-item" key={index} style={{ wordWrap: 'break-word' }} onClick={() => goTo(project.title)}>
            <h2 className="project-title">{project.title}</h2>
            <img alt={project.title} src={project.img} loading="lazy" width={80} height={80} style={{textAlign:'center'}}></img>
            <p className="project-description">{project.description}</p>
            <button className="button-style" onClick={() => goTo(project.title)}> En Savoir Plus </button>
          </div>
        ))}
      </div>
    </div>
    //   <div className="container">
    //       <img alt="kaouka" src={invoice_logo} loading="lazy" width={80} height={80} onClick={goToKaouka}></img>
    //       <p><strong>Kaouka</strong> est un réseau social qui permet aux utilisateurs de constater les posts des autres utilisateurs en fonction de leurs géolocalisation</p>
    //   </div>
    // </div>
  );
};

export default Realisation;
