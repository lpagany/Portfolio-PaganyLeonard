import React from 'react';
import '../styles/FooterCol.css';
import { Link } from 'react-router-dom';

export default function FooterCol({
  heading = 'col heading',
  links = [
    {
      type: 'link',
      title: 'Accueil',
      path: '/accueil',
    },
    {
      type: 'link',
      title: 'Apropos',
      path: '/apropos',
    },
  ],
}) {
  return (
    <div className="footer-col">
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
