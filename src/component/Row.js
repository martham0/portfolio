import React from 'react';
import Card from './Card';

const Row = ({ name, tech, src }) => {
  if (name[2]) {
    return (
      <div className="Row">
        <Card name={name[0]} tech={tech[0]} src={src[0]} />
        <Card name={name[1]} tech={tech[1]} src={src[1]} />
        <Card name={name[2]} tech={tech[2]} src={src[2]} />
      </div>
    );
  } else {
    return (
      <div className="Row">
        <Card name={name[0]} tech={tech[0]} src={src[0]} />
        <Card name={name[1]} tech={tech[1]} src={src[1]} />
      </div>
    );
  }
};

export default Row;

//   <Card name={name[0]} tech={tech[0]} src={src[0]} />
