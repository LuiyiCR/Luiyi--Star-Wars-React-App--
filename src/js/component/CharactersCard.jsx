import React from 'react';

export const Character = ({ name }) => (
  <div className="card" style={{ width: '18rem' }}>
    <img
      src="https://buntingmagnetics.com/wp-content/uploads/2015/04/400x300.gif"
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
