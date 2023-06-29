import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/TemoignagesListe.css";
import Footer from "../components/Footer";

export default function TemoignagesListe() {
  const [temoignages, setTemoignages] = useState([]);
  const [nouveauTemoignage, setNouveauTemoignage] = useState("");
  const [nomUtilisateur, setNomUtilisateur] = useState("");
  const [messageAjout, setMessageAjout] = useState("");
  const location = useLocation();

  const handleAjouterTemoignage = () => {
    const temoignage = {
      id: Date.now(),
      nomUtilisateur,
      message: nouveauTemoignage,
    };

    setTemoignages([...temoignages, temoignage]);
    setMessageAjout("Votre témoignage a été ajouté avec succès. Merci !");
    setNouveauTemoignage("");
    setNomUtilisateur("");
  };

  return (
    <div className="temoignages-liste-container">
      <div className="temoignages-liste-content">
        <h2>Ajouter un témoignage</h2>
        {messageAjout && <p className="message-ajout">{messageAjout}</p>}
        <input
          type="text"
          value={nomUtilisateur}
          onChange={(e) => setNomUtilisateur(e.target.value)}
          placeholder="Nom d'utilisateur"
        />
        <textarea
          value={nouveauTemoignage}
          onChange={(e) => setNouveauTemoignage(e.target.value)}
        ></textarea>
        <button onClick={handleAjouterTemoignage}>Ajouter</button>
        {temoignages.length > 0 && (
          <div className="liste-temoignages">
            <h2>Liste des témoignages</h2>
            <ul>
              {temoignages.map((temoignage) => (
                <li key={temoignage.id}>
                  <strong>{temoignage.nomUtilisateur}:</strong>{" "}
                  {temoignage.message}
                  <Link
                    to={{
                      pathname: "/Modification",
                      state: { temoignage },
                    }}
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
