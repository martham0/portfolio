import React from 'react';
import warning from '../assets/img/warning.png';

export default function Four0Four() {
  return (
    <div className="">
      <img src={warning} alt="A barrier"></img>
      <div className="message">
        <h1>
          404<span className="blink">|</span>
        </h1>
        <h3>The page you are looking for cannot be found. Sorry! </h3>
      </div>
    </div>
  );
}
