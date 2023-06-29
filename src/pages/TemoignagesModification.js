import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/TemoignagesModification.css';
import Footer from '../components/Footer';

export default function TemoignagesModification({ location }) {
  const history = useHistory();
  const [nouveauTemoignage, setNouveauTemoignage] = useState('');
  const [messageModification, setMessageModification] = useState('');

  const temoignage = location.state?.temoignage;

  const handleModifierTemoignage = () => {
    const temoignageModifie = {
      ...temoignage,
      message: nouveauTemoignage !== '' ? nouveauTemoignage : temoignage.message,
    };

    // Ici, vous pouvez envoyer le témoignage modifié à votre backend ou à une autre fonction pour le traitement ultérieur

    setMessageModification('Votre témoignage a été modifié avec succès. Merci !');
    history.push({
      pathname: '/Liste-des-temoignages',
      state: { temoignageModifie, messageModification },
    });
  };

  return (
    <div className="temoignages-modification-container">
      <div className="temoignages-modification-content">
        <h2>Modifier le témoignage</h2>
        {messageModification && <p className="message-modification">{messageModification}</p>}
        <textarea
          value={nouveauTemoignage !== '' ? nouveauTemoignage : temoignage?.message}
          onChange={(e) => setNouveauTemoignage(e.target.value)}
        ></textarea>
        <button onClick={handleModifierTemoignage}>Modifier</button>
        <Link to="/Liste-des-temoignages">Retour à la liste des témoignages</Link>
      </div>
      <Footer />
    </div>
  );
}
























