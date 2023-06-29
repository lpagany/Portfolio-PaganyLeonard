import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Témoignages.css';
import Footer from '../components/Footer';

export default function Témoignages() {
  return (
    <div className="temoignages__container">
      <div className="temoignages__list">
        <div className="temoignages__item">
          <h1>Liste des témoignages</h1>
          <Link to="/Liste-des-temoignages">Ajouter un témoignage</Link>
        </div>
        <div className="temoignages__item">
          <h1>Modification d'un témoignage</h1>
          <Link to="/Modification">Modifier un témoignage</Link>
        </div>
        </div>
        <Footer />
    </div>
  );
}














