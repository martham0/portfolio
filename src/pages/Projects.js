import React from 'react';
import Header from '../component/Header';
import Row from '../component/Row';

const Projects = () => {
  return (
    <div>
      <Header title="Projects"></Header>
      <Row
        name={['Cuisine Search', 'Pokédex', 'Weather']}
        tech={[
          'React, Yelp API, Tachyon',
          'React, Pokemon API, Tachyon',
          'Express, Weather API, Node Js',
        ]}
        src={[
          'https://github.com/martham0/yelp',
          'https://github.com/martham0/PokeDex',
          'https://github.com/martham0/weather',
        ]}
      />
    </div>
  );
};

export default Projects;
