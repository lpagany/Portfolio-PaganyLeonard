import React from "react";
import PText from "./Ptext";

export default function AccueilInfoItem({ title = "Le titre", items = ["HTML", "CSS", "JS"] }) {
  return (
    <div className="accueil__info__item">
      <h2 className="accueil__info__heading">{title}</h2>
      <ul className="accueil__info__items-list">
        {items.map((item, index) => (
          <li className="accueil__info__item-list" key={index}>
            <PText>{item}</PText>
          </li>
        ))}
      </ul>
    </div>
  );
}

