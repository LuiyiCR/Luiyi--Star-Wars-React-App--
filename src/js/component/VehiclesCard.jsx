import React from 'react';

export const Vehicle = ({ name, gender, hairColor, eyeColor }) => (
  <div className="card-group">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{gender}</p>
        <p className="card-text">{hairColor}</p>
        <p className="card-text">{eyeColor}</p>
      </div>
    </div>
  </div>
);
