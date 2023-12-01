import React from 'react';

export const Planet = ({ name }) => (
  <div className="card-group">
    <div className="card" style={{ width: '18rem' }}>
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/databank_abafar_01_169_475b5d42.jpeg?region=0%2C0%2C1560%2C878"
        className="card-img-top"
        alt="..."
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
  </div>
);
