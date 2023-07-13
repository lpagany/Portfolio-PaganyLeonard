import React from "react";
import "../styles/TestimoniesFormat.css";

const TestimoniesFormat = ({ temoignage, onModifierTemoignage }) => {
  const { nomUtilisateur, message, userImage } = temoignage;

  return (
    <div className="testimonies-format">
      <div className="testimonies-format-content">
        <div className="testimonies-format-header">
          <img src={userImage} alt="User" className="testimonies-format-image" />
          <h3>{nomUtilisateur}</h3>
        </div>
        <p>{message}</p>
        <button onClick={onModifierTemoignage}>Modifier</button>
      </div>
    </div>
  );
};

export default TestimoniesFormat;


