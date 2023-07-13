import React, { useContext, useState } from "react";
import { TemoignagesContext } from "./store";
import { useHistory } from "react-router-dom";
import "../styles/TemoignagesListe.css";
import Footer from "../components/Footer";

export default function AddTemoignage({handleAddTemoignage}) { // Accept props
  const {
    messageModification,
  } = useContext(TemoignagesContext);

  const [nouveauTemoignage, setNouveauTemoignage] = useState("");
  const [nomUtilisateur, setNomUtilisateur] = useState("");
  const history = useHistory();
  const handleAjouterTemoignage = () => {
    const temoignage = {
      id: Date.now(),
      nomUtilisateur,
      message: nouveauTemoignage,
    };
    
     handleAddTemoignage(temoignage); // Call the callback function from props
    setNouveauTemoignage("");
    setNomUtilisateur("");
    history.goBack();
  };

  return (
    <div className="temoignages-liste-container">
      <div className="temoignages-liste-content">
        <h2>Ajouter un témoignage</h2>
        {messageModification && (
          <p className="message-modification">{messageModification}</p>
        )}
        <input
          type="text"
          value={nomUtilisateur}
          onChange={(e) => setNomUtilisateur(e.target.value)}
          className="custom-input"
          placeholder="Nom d'utilisateur"
        />
        <textarea
          value={nouveauTemoignage}
          onChange={(e) => setNouveauTemoignage(e.target.value)}
          className="custom-textarea"
          placeholder="Ajoutez votre témoignage ici"
        ></textarea>
        <button onClick={handleAjouterTemoignage}>Ajouter</button>
      </div>
      <Footer />
    </div>
  );
}
