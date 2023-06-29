import React from 'react'
import { NavLink } from "react-router-dom";
import "../styles/NavMenu.css";

export default function NavMenu() {
  return (
    <div className="NavMenuStyles">
      <ul>
        <li>
          <NavLink to="/" exact>Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/Projets">Projets</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
          <NavLink to="/Témoignages">Témoignages</NavLink>
          </li>
      </ul>
    </div>
  );
}
