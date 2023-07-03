import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./Projets";
import "../styles/Projet1.css";

export default function Projet1() {
  const projetMaxFit = {
    id: 1,
    title: "Projet MaxFit",
    description:
      "Un système de suivi de remise en forme et de gestion des entraînements.",
    link: "https://gitlab.com/fitness930421/fitness-max",
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "Enregistrement des séances d'entraînement",
      "Suivi des progrès",
      "Planification des séances",
    ],
  };

  return (
    <div className="projet-container">
      <h1>Bienvenue au projet MaxFit!!!</h1>
      <h2>{projetMaxFit.title}</h2>
      <p>{projetMaxFit.description}</p>
      <h3>Technologies utilisées :</h3>
      <ul>
        {projetMaxFit.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <h3>Fonctionnalités :</h3>
      <ul>
        {projetMaxFit.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a href={projetMaxFit.link}>lien</a>
      <Link to="/Projets">Retour à la liste des projets</Link>
      <SearchBar />
    </div>
  );
}
