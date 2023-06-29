import React from 'react';
import '../styles/TemoignageItem.css';

export default function TemoignageItem({ id, name, message, supprimerTemoignage }) {
  return (
    <div className="temoignage-item">
      <h3 className="temoignage-item__name">{name}</h3>
      <p className="temoignage-item__message">{message}</p>
      <button onClick={() => supprimerTemoignage(id)}>Supprimer</button>
    </div>
  );
}


