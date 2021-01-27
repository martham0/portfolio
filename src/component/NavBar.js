import React from 'react';
import { Link } from 'react-router-dom';
import skills from '../assets/img/skills.png';
import project from '../assets/img/projects.png';
import home from '../assets/img/home.png';

export default function NavBar() {
  return (
    <nav className="Navi">
      <ul>
        <li>
          <Link to="/">
            {' '}
            <img src={home} alt="Home" />
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <img src={skills} alt="Skills" />
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <img src={project} alt="Projects" />
          </Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}
