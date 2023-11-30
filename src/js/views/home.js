import React, { useState } from 'react';
import '../../styles/home.css';
import { CharacterCard } from '../component/CharactersCard.jsx';
import { PlanetCard } from '../component/PlanetsCard.jsx';
import { VehicleCard } from '../component/VehiclesCard.jsx';

export const Home = () => {
  // const [characters, setCharacters] = useState([]);

  return (
    <div className="card-container">
      <CharacterCard /> <PlanetCard /> <VehicleCard />
    </div>
  );
};
