import React from 'react';
import Cuisine from '../assets/img/Cuisine.png';
import Pokedex from '../assets/img/Pokedex.png';
import Weather from '../assets/img/Weather.png';

const Card = ({ name, src, tech }) => {
  const img = {
    'Cuisine Search': Cuisine,
    Pokédex: Pokedex,
    Weather,
  };

  return (
    <div className="Card">
      <a href={src}>
        <img className="zoom" src={img[name]} alt="" />
      </a>
      <div className="text">
        <h3>{name}</h3>
        <p>
          <b>Tech:</b> {tech}
        </p>
      </div>
    </div>
  );
};
export default Card;

// {`../img/${name}.png`}
