import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './Projets';
import '../styles/Projet2.css';

export default function Projet2() {
  const projetMode = {
    id: 2,
    title: 'Projet Mode',
    description: "Un site de commerce électronique de mode offrant une large sélection de vêtements et d'accessoires.",
    link: '/projet-mode',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: ['Catalogue de produits', 'Panier d\'achat', 'Paiement sécurisé'],
  };

  return (
    <div className="projet-container">
      <h1>Bienvenue au projet Mode !!!</h1>
      <h2>{projetMode.title}</h2>
      <p>{projetMode.description}</p>
      <h3>Technologies utilisées :</h3>
      <ul>
        {projetMode.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <h3>Fonctionnalités :</h3>
      <ul>
        {projetMode.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Link to="/Projets">Retour à la liste des projets</Link>
      <SearchBar />
    </div>
  );
}



