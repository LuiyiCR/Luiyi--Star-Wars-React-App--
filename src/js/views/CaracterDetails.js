import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../store/appContext';

import '../../styles/demo.css';

export const CaracterDetails = ({
  name,
  gender,
  eye_color,
  hair_color,
  skin_color,
  height,
}) => (
  <div className="card mb-3 container" style={{ width: '45rem' }}>
    <div className="row g-0">
      <div className="col">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/din-djarin-main_a3810794.jpeg?region=143%2C37%2C1150%2C646"
          className="img-fluid"
          alt="..."
        />
      </div>
      <div className="col">
        <div className="card-body">
          <h2 className="card-title">Sky Walker{name}</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            rem neque quidem.
          </p>
        </div>
      </div>
      <span className="border-divisor mt-5"></span>
      <div className="container mt-1 text-danger">
        <p className="card-text">Gender: Male{gender}</p>
        <p className="card-text">Eye Color: Blue{eye_color}</p>
        <p className="card-text">{hair_color}</p>
        <p className="card-text">{skin_color}</p>
        <p className="card-text">{height}</p>
      </div>
    </div>
  </div>
);
