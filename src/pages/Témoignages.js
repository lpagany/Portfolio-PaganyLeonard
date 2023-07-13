import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/Témoignages.css";
import Footer from "../components/Footer";

export default function Témoignages({ temoignages, setTemoignages }) {
  const [editMode, setEditMode] = useState(false);
  const [editedTemoignage, setEditedTemoignage] = useState(null);

  const handleEdit = (temoignage) => {
    setEditMode(true);
    setEditedTemoignage(temoignage);
  };

  const handleUpdateTemoignage = () => {
    // Logique pour mettre à jour le témoignage dans votre source de données (backend, Redux store, etc.)
    // ...

    setEditMode(false);
    setEditedTemoignage(null);
  };

  return (
    <div className="temoignages__container">
      <div className="temoignages__list">
        <div className="temoignages__item">
          <Link to="/AddTemoignage">Ajouter un témoignage</Link>
          <h1>Liste des témoignages</h1>
          <ul>
            {temoignages.length > 0 && (
              <div className="liste-temoignages">
                <ul>
                  {temoignages.map((temoignage) => (
                    <li key={temoignage.id} className="temoignage-item">
                      {/* Contenu du témoignage */}
                      <div className="temoignage-profile-image">
                        <img
                          src="https://t4.ftcdn.net/jpg/04/31/64/75/240_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg"
                          alt="Profile"
                          className="img-fluid"
                        />
                      </div>
                      <div className="temoignage-content">
                        <strong>{temoignage.nomUtilisateur}:</strong>{" "}
                        {temoignage.message}
                      </div>
                      {!editMode && (
                        <button
                          className="modifier-button"
                          onClick={() => handleEdit(temoignage)}
                        >
                          Modifier
                        </button>
                      )}
                      {editMode &&
                        editedTemoignage &&
                        editedTemoignage.id === temoignage.id && (
                          <div className="modification-form">
                            {/* Formulaire de modification */}
                            <input
                              type="text"
                              value={editedTemoignage.message}
                              onChange={(e) =>
                                setEditedTemoignage({
                                  ...editedTemoignage,
                                  message: e.target.value,
                                })
                              }
                            />
                            <button onClick={handleUpdateTemoignage}>
                              Enregistrer
                            </button>
                            <button onClick={() => setEditMode(false)}>
                              Annuler
                            </button>
                          </div>
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Témoignages.propTypes = {
  temoignages: PropTypes.array.isRequired,
  setTemoignages: PropTypes.func.isRequired,
};

