import React from 'react';

export const Character = ({ name }) => (
  <div className="card" style={{ width: '18rem' }}>
    <img
      src="https://lumiere-a.akamaihd.net/v1/images/burryaga-main_a6f0c574.jpeg?region=0%2C0%2C1920%2C1080"
      className="card-img-top"
      alt="Luke SkyWalker"
    />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>

      <a href="">
        <button className="btn btn-outline-primary">Learn More!</button>
      </a>
      <button
        className="btn btn-outline-danger
        "
      >
        <i className="fa-regular fa-heart"></i>
      </button>
    </div>
  </div>
);
