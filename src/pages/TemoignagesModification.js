import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { TemoignagesContext } from "./store";
import "../styles/TemoignagesModification.css";
import Footer from "../components/Footer";

export default function TemoignagesModification({ location }) {
  const history = useHistory();
  const { temoignages, temoignagesModifies, modifierTemoignage } =
    useContext(TemoignagesContext);

  const [nouveauTemoignage, setNouveauTemoignage] = useState("");
  const [messageModification, setMessageModification] = useState("");
  const [temoignageRecherche, setTemoignageRecherche] = useState(""); // Nouvel état pour la recherche

  const temoignage = location.state?.temoignage;

  useEffect(() => {
    const temoignageModifie = temoignagesModifies.find(
      (t) => t.id === (temoignage && temoignage.id)
    );
    if (temoignageModifie) {
      setNouveauTemoignage(temoignageModifie.message);
    }
  }, [temoignage, temoignagesModifies]);

  const handleModifierTemoignage = () => {
    const temoignageModifie = {
      ...temoignage,
      message:
        nouveauTemoignage !== "" ? nouveauTemoignage : temoignage?.message,
    };

    modifierTemoignage(temoignageModifie);
    setMessageModification(
      "Votre témoignage a été modifié avec succès. Merci !"
    );
    history.push({
      pathname: "/Liste-des-temoignages",
      state: { messageModification },
    });
  };

  const handleRechercherTemoignage = () => {
    const temoignageTrouve = temoignages.find(
      (temoignage) => temoignage.nomUtilisateur === temoignageRecherche
    );
    if (temoignageTrouve) {
      setNouveauTemoignage(temoignageTrouve.message);
    } else {
      setNouveauTemoignage("");
    }
  };

  return (
    <div className="temoignages-modification-container">
      <div className="temoignages-modification-content">
        <h2>Modifier le témoignage</h2>
        {messageModification && (
          <p className="message-modification">{messageModification}</p>
        )}
        <input
          type="text"
          value={temoignageRecherche}
          onChange={(e) => setTemoignageRecherche(e.target.value)}
          className="custom-input"
          placeholder="Rechercher un témoignage avec le nom d'utilisateur"
        />
        <button onClick={handleRechercherTemoignage}>Rechercher</button>{" "}
        {/* Bouton de recherche */}
        <textarea
          value={
            nouveauTemoignage !== ""
              ? nouveauTemoignage
              : temoignage?.message || ""
          }
          onChange={(e) => setNouveauTemoignage(e.target.value)}
        ></textarea>
        <button onClick={handleModifierTemoignage}>Modifier</button>
        <Link to="/Liste-des-temoignages">
          Retour à la liste des témoignages
        </Link>
      </div>
      <Footer />
    </div>
  );
}
