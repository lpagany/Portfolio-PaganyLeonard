import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/Projets.css";
import Footer from "../components/Footer";


export function SearchBar({ handleSearch }) {
  return (
    <div className="projets__searchbar">
      <form>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Rechercher un projet"
        />
        <MdSearch />
      </form>
    </div>
  );
}

export default function Projets() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterProjects = (project) => {
    if (searchTerm === "") {
      return true;
    }
    return project.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const projects = [
    {
      id: 1,
      title: "Projet 1",
      description: "MaxFit",
      link: "/projet-1",
    },
    {
      id: 2,
      title: "Projet 2",
      description: "Commerce electronique de mode",
      link: "/projet-2",
    },
    {
      id: 3,
      title: "Projet 3",
      description: "Business plan",
      link: "/projet-3",
    },
  ];

  const filteredProjects = projects.filter((project) =>
    filterProjects(project)
  );

  return (
    <div className="projets__container">
      <h1>Mes projets</h1>
      <SearchBar handleSearch={handleSearch} />
      <div className="projets__list">
        {filteredProjects.map((project) => (
          <div className="projets__item" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link to={project.link}>Voir {project.title}</Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}


