import React, { useState } from "react";
import "../styles/Contact.css";
import Footer from "../components/Footer";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [sent, setSent] = useState(false);

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]{5,50}$/u;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier les champs vides
    if (!firstName || !lastName || !email || !message) {
      setErrors(["Veuillez remplir tous les champs"]);
      return;
    }

    // Valider les champs
    if (!nameRegex.test(firstName)) {
      setErrors(["Le prénom doit contenir entre 5 et 50 lettres"]);
      return;
    }

    if (!nameRegex.test(lastName)) {
      setErrors(["Le nom doit contenir entre 5 et 50 lettres"]);
      return;
    }

    if (!emailRegex.test(email)) {
      setErrors(["L'email n'est pas valide"]);
      return;
    }

    // Valider la longueur du message
    const wordCount = message.trim().split(/\s+/).length;
    if (wordCount > 150) {
      setErrors(["Le message ne doit pas dépasser 150 mots"]);
      return;
    }

    // Réinitialiser les champs du formulaire
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setErrors([]);
    setSent(true);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setErrors([]);
    setSent(false);
  };

  return (
    <div className="contact-container">
      <h2>Contactez-nous</h2>
      {errors.length > 0 && (
        <ul className="error-list">
          {errors.map((error, index) => (
            <li key={index} className="error-message">
              {error}
            </li>
          ))}
        </ul>
      )}
      {!sent ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Entrez votre prénom"
              className={
                errors.includes("Veuillez remplir tous les champs") ||
                errors.includes("Le prénom doit contenir entre 5 et 50 lettres")
                  ? "error"
                  : ""
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Entrez votre nom"
              className={
                errors.includes("Veuillez remplir tous les champs") ||
                errors.includes("Le nom doit contenir entre 5 et 50 lettres")
                  ? "error"
                  : ""
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              className={
                errors.includes("Veuillez remplir tous les champs") ||
                errors.includes("L'email n'est pas valide")
                  ? "error"
                  : ""
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Entrez votre message"
              className={
                errors.includes("Veuillez remplir tous les champs") ||
                errors.includes("Le message ne doit pas dépasser 150 mots")
                  ? "error"
                  : ""
              }
            ></textarea>
          </div>
          <div className="button-container">
            <button type="submit">Envoyer</button>
          </div>
        </form>
      ) : (
        <div className="thank-you">
          <h3>Merci pour votre message !</h3>
          <p>Nous vous répondrons dans les plus brefs délais.</p>
          <div className="button-container">
            <button type="button" onClick={handleReset}>
              Réinitialiser
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
