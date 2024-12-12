import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Kaouka.css";
import kaouka_logo from './images/kaouka-logo.png';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/firestore';
import play_store from './images/Play_Store.svg.png';
import apple_store from './images/App_Store.png';

const firebaseConfig = {
    apiKey: "AIzaSyC0AmTryR4jHXZ2mIi7Di-89qGSej0v_VA",
    authDomain: "kaouka.firebaseapp.com",
    projectId: "kaouka",
    storageBucket: "kaouka.appspot.com",
    messagingSenderId: "717081618861",
    appId: "1:717081618861:web:41770c6045e4ea72aa9924",
    measurementId: "G-N98H0NHNSK"
  };

firebase.initializeApp(firebaseConfig);

function ConfirmationMessage() {
    return (
      <div>
        <h2 style={{color:"white"}}>Enregistré</h2>
        <p style={{color:"white"}}>Merci d'avoir enregistré votre addresse email. Nous vous transmettrons la date de sortie de l'application.</p>
      </div>
    );
  }

const Realisation = () => {
  const navigate = useNavigate();
  const main = () => {
    navigate("/Realisation");
  };

  const goToAndroidTester = (page) => {
    navigate("/Kaouka_app_android");
  };

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNotSubmitted, setIsNotSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const db = firebase.firestore();
        // Replace 'emails' with the name of your Firestore collection
        const emailsCollection = db.collection('emails');
        // Add the email to the 'emails' collection
        emailsCollection.add({
          email: email,
        //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((docRef) => {
          console.log('Email added with ID: ', docRef.id);
          setIsSubmitted(true)
        })
        .catch((error) => {
          console.error('Error adding email: ', error);
          setIsNotSubmitted(true)
        });
    } catch (error) {
        setIsNotSubmitted(true)
        console.error('Error:', error);
    }
  };

  const handleClickApple = () => {
    window.location.href = 'https://apps.apple.com/fr/app/kaouka/id6504161795';
  };

  const handleClickAndroid = () => {
    // TODO: instead of download apk send a form to ask for android tester
    goToAndroidTester();
    // window.location.href = 'https://kenyhenry.github.io/elaborium_website/kaouka-1.0.0.apk';

  };

  return (
    <div className="side-container">
      <button className="button-style" onClick={main}> Return</button>
      <div className="centered-container" onClick={handleClickApple}>
        <div className="centered-content">
          <img alt="kaouka" src={kaouka_logo} loading="lazy" width={100} height={100}></img>
        </div>
        <div className="centered-content">
          <img alt="kaouka" src={apple_store} loading="lazy" width={300}></img>
        </div>
      </div>
      <div className="centered-container" onClick={handleClickAndroid}>
        <div className="centered-content">
          <img alt="kaouka" src={kaouka_logo} loading="lazy" width={100} height={100}></img>
        </div>
        <div className="centered-content">
          <img alt="kaouka" src={play_store} loading="lazy" width={300} ></img>
        </div>
      </div>
    </div>
  );
};

export default Realisation;
