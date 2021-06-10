import React from "react";
import './Card.css';

function Card({ fact, index }) {

  return (
    <div className="card">
      <h3 className="card-title">Fact #{index}</h3>
      <p className="card-text">{fact}</p>
    </div>
  );
}

export default Card;
