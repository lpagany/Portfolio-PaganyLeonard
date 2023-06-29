import React from "react";
import HeroImg from "../assets/images/PLphoto.jpg";
import PText from "./Ptext";
import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <div className="container">
      <h1 className="hero__name">Portfolio de Pagany Léonard</h1>
      <div className="hero__img">
        <img src={HeroImg} alt=" Portfolio de Pagany Léonard " />
      </div>
      <div className="hero__info">
        <PText>
          <p>
            Développeur Front End passionné et expérimenté, spécialisé dans la
            réalisation de projets numériques. Soucieux du détail et orienté
            vers la qualité, je suis constamment à l'affût des dernières
            tendances en matière de développement numérique.
          </p>
        </PText>
      </div>
    </div>
  );
}
