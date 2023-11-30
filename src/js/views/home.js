import React, { useState } from 'react';
import '../../styles/home.css';
import { Character } from '../component/CardCharacters.jsx';
import { Planet } from '../component/CardPlanets.jsx';
import { Vehicle } from '../component/CardVehicles.jsx';

export const Home = () => {
  // const [characters, setCharacters] = useState([]);

  return (
    <div className="card-container">
      <Character />, <Planet />, <Vehicle />
    </div>
  );
};
