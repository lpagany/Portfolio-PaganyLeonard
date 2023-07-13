import React, { createContext, useState } from 'react';

export const TemoignagesContext = createContext();

export const TemoignagesProvider = ({ children }) => {
  const [temoignages, setTemoignages] = useState([]);
  const [temoignagesModifies, setTemoignagesModifies] = useState([]);

  const ajouterTemoignage = (nouveauTemoignage) => {
    const temoignage = {
      id: Date.now(),
      nomUtilisateur: nouveauTemoignage.nomUtilisateur,
      message: nouveauTemoignage.message,
    };

    setTemoignages([...temoignages, temoignage]);
  };

  const modifierTemoignage = (temoignageModifie) => {
    const temoignagesMisAJour = temoignages.map((temoignage) =>
      temoignage.id === temoignageModifie.id ? temoignageModifie : temoignage
    );

    setTemoignages(temoignagesMisAJour);
    setTemoignagesModifies([...temoignagesModifies, temoignageModifie]);
  };

  const supprimerTemoignage = (id) => {
    const temoignagesMisAJour = temoignages.filter(
      (temoignage) => temoignage.id !== id
    );
    setTemoignages(temoignagesMisAJour);
  };

  return (
    <TemoignagesContext.Provider
      value={{
        temoignages,
        temoignagesModifies,
        ajouterTemoignage,
        modifierTemoignage,
        supprimerTemoignage,
      }}
    >
      {children}
    </TemoignagesContext.Provider>
  );
};

