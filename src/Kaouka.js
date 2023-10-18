import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Kaouka.css";
import kaouka_logo from './images/kaouka-logo.png';

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
    navigate("/", { replace: true });
  };
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNotSubmitted, setIsNotSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        let data = {'req_type':'postMail', 'email':email}
        const response = await fetch('http://45.147.251.85:80/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // Request was successful
          await response.json();
          setIsSubmitted(true);
        } else {
          // Handle errors
          console.error('HTTP Error:', response.status, response.statusText);
          setIsNotSubmitted(true)
        }
    } catch (error) {
        setIsNotSubmitted(true)
        console.error('Error:', error);
    }
  };

  return (
    <div class="container1">
        <div class="left">
        <button style={{position:'absolute', top: 0, left: 0}} onClick={main}> Return</button>
          <div class="container2">
            <img alt="kaouka" src={kaouka_logo} loading="lazy" width={50} height={50}></img>
            <h1>Kaouka</h1>
            {/* <p class="square-paragraph">Découvrez l’application révolutionnaire qui rapproche particuliers et professionnels comme jamais auparavant ! Vous avez besoin d’un service ou d’un professionnel à proximité ? Notre application intelligente fait le travail pour vous, en vous connectant instantanément aux experts locaux qui répondent à vos besoins. Trouvez des artisans, des restaurants, des prestataires de services et bien plus encore, à deux pas de chez vous. Simplifiez votre vie, gagnez du temps et profitez des avantages de la proximité avec notre application. Ne perdez plus de temps à chercher, laissez l’application faire le lien, pour une expérience plus rapide, plus facile et plus pratique que jamais. Enregistrez-vous pour en savoir plus et découvrez comment nous rapprochons les communautés et les professionnels, un clic à la fois.</p> */}
            <h2>Tenez-vous informé de la sortie de l'application</h2>
          </div>
        </div>
        <div class="right">
          {isSubmitted ? (
            <ConfirmationMessage />
          ) : (
            <form onSubmit={handleSubmit}>
                {/* <p style={{color:'white'}}>Soyez au courant de la sortie de l'application Kaouka</p> */}
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', gap: '10px'}}>
                    <div>
                        {/* <label class="label1">Email : </label> */}
                        <input
                            class="input"
                            type="email"
                            placeholder="Entrer votre email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button class="button10" type="submit">Enregistré vous</button>
                    {isNotSubmitted ? <p style={{color:"red"}}>Une erreur est survenu, merci de reesayer</p> : <p></p>}
                </div>
            </form>
          )}
        </div>
    </div>
  );
};

export default Realisation;
