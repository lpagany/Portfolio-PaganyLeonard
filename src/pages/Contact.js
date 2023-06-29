import React, { useState } from 'react';
import '../styles/Contact.css';
import Footer from '../components/Footer';


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuer ici la logique d'envoi du formulaire (appel à une API, envoi d'un e-mail, etc.)
    // Vous pouvez utiliser les valeurs des états name, email et message pour cela

    // Après l'envoi du formulaire, vous pouvez réinitialiser les états et afficher un message de confirmation
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div className="contact-container">
      <h1>Merci de nous contacter</h1>

      {submitted ? (
        <div>
          <p>Merci pour votre message ! Nous vous contacterons bientôt.</p>
          <button onClick={handleReset}>Réinitialiser</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom et Prenom :</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit">Envoyer</button>
        </form>
      )}
      <Footer />
    </div>
  );
}
