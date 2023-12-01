import React from 'react';
import { Link } from 'react-router-dom';

export const Character = ({ name }) => (
  <div className="card" style={{ width: '18rem' }}>
    <img
      src="https://lumiere-a.akamaihd.net/v1/images/burryaga-main_a6f0c574.jpeg?region=0%2C0%2C1920%2C1080"
      className="card-img-top"
      alt="Luke SkyWalker"
    />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>

      <Link to="/details">
        <button className="btn btn-outline-primary">Character Details!</button>
      </Link>
      <button
        className="btn btn-outline-danger
        "
      >
        <i className="fa-regular fa-heart"></i>
      </button>
    </div>
  </div>
);
