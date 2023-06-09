import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  const links = [
    {
      title: "LinkedIn",
      path: "https://www.linkedin.com/in/pagany-l%C3%A9onard-41a688a/",
    },
    {
      title: "GitHub",
      path: "https://github.com/lpagany/Portfolio-PaganyLeonard",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          ))}
          <Link to="/contact" className="footer__button">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
