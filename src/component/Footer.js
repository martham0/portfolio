import React from 'react';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <a href="https://github.com/martham0">
          <img className="zoom" src={github} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/mmartham/">
          <img className="zoom" src={linkedin} alt="Linkedin" />
        </a>
      </div>
      <div className="signature">
        <a href="https://github.com/martham0/me">
          <p>Created by Martha Martinez.</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
