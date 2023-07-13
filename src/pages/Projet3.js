import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './Projets';
import '../styles/Projet3.css';
import image2 from '../assets/images/36822-MIX-MINI-FRIANDISES-FOND-BLANC-V2.png';
import image3 from '../assets/images/friandise.jpg';

export default function Projet3() {
  const projetBusinessPlan = {
    id: 3,
    title: 'Projet Business Plan',
    description: 'Un plan d\'affaires détaillé pour un projet entrepreneurial.',
    link: '/projet-business-plan',
    technologies: ['Microsoft Word', 'Excel', 'PowerPoint'],
    features: ['Analyse de marché', 'Stratégie de marketing', 'Plan financier'],
  };

  return (
    <div className="projet-container">
      <h1>Bienvenue au projet Business Plan !!!</h1>
      <h2>{projetBusinessPlan.title}</h2>
      <p>{projetBusinessPlan.description}</p>
      <h3>Technologies utilisées :</h3>
      <ul>
        {projetBusinessPlan.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <h3>Fonctionnalités :</h3>
      <ul>
        {projetBusinessPlan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <h3>Images :</h3>
      <div className="projet-images">
        <img src={image2} alt="36822-MIX-MINI-FRIANDISES-FOND-BLANC-V2.png" />
        <img src={image3} alt="friandise.jpg" />
      </div>
      <Link to="/Projets">Retour à la liste des projets</Link>
      <SearchBar />
    </div>
  );
}


