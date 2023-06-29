import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './Projets';
import '../styles/Projet3.css'

export default function Projet3() {
  const projetConfiserie = {
    id: 3,
    title: 'Projet Confiserie',
    description: 'Un business plan pour une confiserie artisanale et gourmande.',
    link: '/projet-confiserie',
    technologies: ['Excel', 'PowerPoint'],
    features: ['Étude de marché', 'Plan financier', 'Stratégie de vente'],
  };

  return (
    <div className="projet-container">
      <h1>Bienvenue au projet Confiserie !!!</h1>
      <h2>{projetConfiserie.title}</h2>
      <p>{projetConfiserie.description}</p>
      <h3>Technologies utilisées :</h3>
      <ul>
        {projetConfiserie.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <h3>Fonctionnalités :</h3>
      <ul>
        {projetConfiserie.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Link to="/Projets">Retour à la liste des projets</Link>
      <SearchBar />
    </div>
  );
}

