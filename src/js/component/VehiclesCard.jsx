import React from 'react';
import { Link } from 'react-router-dom';

export const Vehicle = ({ name }) => (
  <div className="card-group">
    <div className="card" style={{ width: '18rem' }}>
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/a-wing-trainer_72ac4ed9.jpeg?region=0%2C0%2C1559%2C877"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Link to="/details">
          <button className="btn btn-outline-primary">Vehicle Details!</button>
        </Link>
        <button
          className="btn btn-outline-danger
        "
        >
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  </div>
);
