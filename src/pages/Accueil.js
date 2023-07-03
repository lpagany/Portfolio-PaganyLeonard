import React from "react";
import PText from "../components/Ptext";
import HeroImg from "../assets/images/PLphoto.jpg";
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
                Bonjour, je suis <span>Pagany Léonard</span>
              </p>
              <h4 className="accueil__heading">Programmeur web</h4>
              <PText>
                Développeur Front End passionné et expérimenté, spécialisé dans
                la réalisation de projets numériques. Forte expertise dans les
                technologies telles que React.js et Next.js. Soucieux du détail
                et orienté vers la qualité, je suis constamment à l'affût des
                dernières tendances en matière de développement numérique.
                Capable de travailler en équipe et de partager mes connaissances
                avec les moins expérimentés.
              </PText>
            </div>
          </div>
          <div className="right">
            <div className="image-container">
              <img src={HeroImg} alt="Pagany Léonard" />
            </div>
          </div>
        </div>
        <div className="cv-container">
          <div className="accueil__info__items">
            <div className="accueil__info__item">
              <h1 className="accueil__info__heading">Formation</h1>
              <div className="accueil__info__item__content">
                <p>Collège: Programmation informatique, La Cité, Ottawa</p>
                <p>
                  Université: Consultation et gestion touristique/e-business,
                  Universidad de León, Espagne
                </p>
                <p>Université: Économie, Université Quisqueya, Haïti</p>
              </div>
            </div>
            <div className="accueil__info__item">
              <h1 className="accueil__info__heading">Compétences</h1>
              <div className="accueil__info__item__content">
                <p>Front-End: HTML, CSS, JavaScript, React</p>
                <p>Back-End: Node.js, Express, PHP</p>
                <p>Conception: Photoshop, After Effects, Figma</p>
              </div>
            </div>
            <div className="accueil__info__item">
              <h1 className="accueil__info__heading">Expériences</h1>
              <div className="accueil__info__item__content">
                <p>
                  2022 - Aujourd'hui: Étudiant en programmation, Employé chez
                  Costco
                </p>
                <p>
                  2005 - 2021: Officier de programme aux Nations Unies, Haïti
                </p>
                <p>
                  2003 - 2005: Économiste junior au Ministère des finances,
                  Haïti
                </p>
                <p>2001 - 2003: Autorisateur/Opérateur – Unicarte, Haïti</p>
                <p>
                  1998 - 2001: Animateur et opérateur de diffusion
                  radiophonique, Haïti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
