import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaQrcode } from "react-icons/fa";
import invoice_logo from './images/invoice-logo.png';
import './Github-Invoice.css';

const GithubInvoice = () => {

    const contact_div = useRef(null);
    const contact = (event) => {
        event.preventDefault();
        contact_div.current.scrollIntoView({ behavior: 'smooth' });
      }

    return (
        <div className="container">
            <nav className="invoice-navbar">
              <ul className={`navbar-menu`}>
                <li className="nav-item">
                    <button className="invoice-button-style"> Doc</button>
                </li>
                <li className="nav-item">
                    <button className="invoice-button-style"> How To</button>
                </li>
                <li className="nav-item">
                    <button className="invoice-button-style"> FAQ</button>
                </li>
                <li className="nav-item">
                    <button className="invoice-button-style" onClick={contact}> Contact</button>
                </li>
              </ul>
            </nav>
            <h1 className='invoiceTitle'>Welcome to GitHub Invoice</h1>
            <img alt="" src={invoice_logo} loading="lazy" width={150} height={150} style={{textAlign:'center'}}></img>
            <p className="description">GitHub Invoice is a billing tool designed to generate invoices based on GitHub issues. It simplifies the process of tracking billable work and creating invoices for your GitHub projects.</p>
            <div className="features">
                <h2>Key Features:</h2>
                <ul>
                    <li>Automatic Invoice Generation</li>
                    <li>Customizable Templates</li>
                    <li>Issue Tracking</li>
                    <li>Export to PDF</li>
                </ul>
            </div>
            <div className="how-it-works">
              <h2>How It Works:</h2>
              <ul>
                <li>Connect GitHub Account</li>
                <li>Select Repository & Install Github Invoice from marketplace</li>
                <li>Customize Invoice using json generate on repo</li>
                <li>On issue labelize a quote is created on github-invoice empty branch</li>
                <li>On push or pull on default branch an invoice is created on github-invoice empty branch</li>
              </ul>
            </div>
            <p className="get-started">Get started today and streamline your billing process with GitHub Invoice!</p>
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
                    <li>
                      <a href="https://kenyhenry.github.io/elaborium_website/" target="_blank" rel="noopener noreferrer">
                        <FaQrcode size={32} />
                      </a>
                    </li>
                  </ul>
                  <p>© 2023 Kény HENRY. Tous droits réservés.</p>
                </footer>
                </div>
        </div>
    );
}

export default GithubInvoice;