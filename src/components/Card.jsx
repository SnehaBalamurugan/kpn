// Card.js
import React from 'react';
import './Card.css'

//Resuable Component
const Card = ({ imageSrc, label,onClick }) => {
  return (
    <div className="custom-card" onClick={onClick}>
      <img className="custom-card-img" src={imageSrc} alt={label} />
      <div className="custom-card-label">
        {label}
      </div>
    </div>
  );
};

export default Card;
