import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Témoignages.css';
import Footer from '../components/Footer';
 
 

export default function Témoignages({temoignages}) {
  const location = useLocation();

  return (
    <div className="temoignages__container">
      <div className="temoignages__list">
        <div className="temoignages__item">
        <Link
                        to=  "/AddTemoignage" 
                       
                     >  Ajouter un témoignage</Link>
          <h1>Liste des témoignages</h1>
          <ul>
            {temoignages.length > 0 && (
              <div className="liste-temoignages">
              
                <ul>
                  {temoignages.map((temoignage) => (
                    <li key={temoignage.id} className="temoignage-item">
                      {/* Contenu du témoignage */}
                      <div className="temoignage-profile-image">
                        <img
                          src="https://t4.ftcdn.net/jpg/04/31/64/75/240_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg" // Set the profile image URL
                          alt="Profile"
                          className="img-fluid"
                        />
                      </div>
                      <div className="temoignage-content">
                        <strong>{temoignage.nomUtilisateur}:</strong>{" "}
                        {temoignage.message}
                      </div>
                      
                    </li>
                  ))}
                </ul>
              </div>
            )}
           
          </ul>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
