import React from "react";
import PText from "../components/Ptext";
import HeroImg from "../assets/images/PLphoto.jpg";
import AccueilInfoItem from "../components/AccueilInfoItem";
import Footer from "../components/Footer";
import "../styles/Accueil.css";

export default function Accueil() {
  return (
    <div className="AccueilPageStyles">
      <div className="page-container">
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="accueil__subheading">
                Bonjour, Je suis <span>Pagany Léonard.</span>
              </p>
              <h2 className="accueil__heading">Programmeur web</h2>
              <PText>
                J'ai fait mes études primaires en Haiti.
                <br />
                <br />
                J'ai commencé à travailler dans le développement web...
                <br />
                <br />
                Ma vision est de devenir un programmeur de qualité
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={HeroImg} alt="Pagany Léonard" />
          </div>
        </div>
        <div className="border"></div>
        <div className="accueil__info__items">
          <div className="accueil__info__item">
            <h1 className="accueil__info__heading">Formation</h1>
            <div className="accueil__info__item__content">
              <AccueilInfoItem title="Collège" items={["La Cité, Ottawa"]} />
              <AccueilInfoItem
                title="Université"
                items={["Universidad de Leon, Espagne"]}
              />
              <AccueilInfoItem
                title="Université"
                items={["Quisqueya, Haiti"]}
              />
            </div>
          </div>
          <div className="accueil__info__item">
            <h1 className="accueil__info__heading">Compétences</h1>
            <div className="accueil__info__item__content">
              <AccueilInfoItem
                title="Front-End"
                items={["HTML", "CSS", "JavaScript", "React"]}
              />
              <AccueilInfoItem
                title="Back-End"
                items={["Node.js", "Express", "PHP"]}
              />
              <AccueilInfoItem
                title="Conception"
                items={["Photoshop", "After Effects", "Figma"]}
              />
            </div>
          </div>
          <div className="accueil__info__item">
            <h1 className="accueil__info__heading">Expériences</h1>
            <div className="accueil__info__item__content">
              <AccueilInfoItem
                title="2022 - Aujourd'hui"
                items={["Étudiant en programmation", "Stagiaire chez Costco"]}
              />
              <AccueilInfoItem
                title="2005 - 2021"
                items={["Officier de programme aux Nations Unies, Haiti"]}
              />
              <AccueilInfoItem
                title="2003 - 2005"
                items={["Économiste junior au Ministère des finances, Haiti"]}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
