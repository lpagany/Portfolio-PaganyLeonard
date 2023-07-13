import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TemoignagesContext } from "./store";
import "../styles/TemoignagesListe.css";
import Footer from "../components/Footer";
;

export default function TemoignagesListe() {
  const {
    temoignages,
    ajouterTemoignage,
    messageModification,
    modifierTemoignage,
  } = useContext(TemoignagesContext);

  const [nouveauTemoignage, setNouveauTemoignage] = useState("");
  const [nomUtilisateur, setNomUtilisateur] = useState("");
  const location = useLocation();

  const handleAjouterTemoignage = () => {
    const temoignage = {
      id: Date.now(),
      nomUtilisateur,
      message: nouveauTemoignage,
    };

    ajouterTemoignage(temoignage);
    setNouveauTemoignage("");
    setNomUtilisateur("");
  };

  const handleModifierTemoignage = (temoignage) => {
    // Mettez ici la logique pour la modification du témoignage
    modifierTemoignage(temoignage);
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
        {temoignages.length > 0 && (
          <div className="liste-temoignages">
            <h2>Liste des témoignages</h2>
            <ul>
              {temoignages.map((temoignage) => (
                <li key={temoignage.id} className="temoignage-item">
                  {/* Contenu du témoignage */}
                  <strong>{temoignage.nomUtilisateur}:</strong>{" "}
                  {temoignage.message}
                  <Link
                    to={{
                      pathname: "/Modification",
                      state: { temoignage },
                    }}
                    onClick={() => handleModifierTemoignage(temoignage)}
                  >
                    Modifier
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {location.state?.messageModification && (
          <p className="message-modification">
            {location.state.messageModification}
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}






