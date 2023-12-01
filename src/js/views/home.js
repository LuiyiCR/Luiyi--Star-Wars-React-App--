import React, { useState } from 'react';
import '../../styles/home.css';
import { Character } from '../component/CharactersCard.jsx';
import { Planet } from '../component/PlanetsCard.jsx';
import { Vehicle } from '../component/VehiclesCard.jsx';

export const Home = () => {
  // const [characters, setCharacters] = useState([]);
  // const [planets, setPlanets] = useState([]);
  // const [vehicles, setVehicles] = useState([]);

  const characters = [
    {
      id: 1,
      name: 'Darth Vader',
      gender: 'Gender: Male',
      hairColor: 'Hair Color: Blond',
      eyeColor: 'Eye Color: Blue',
    },
    { id: 2, name: 'Darth Vader', hairColor: 'Color: Blond', eyeColor: 'Blue' },
  ];

  const planets = [
    {
      id: 3,
      name: 'Darth Vader',
      gender: 'Gender: Male',
      hairColor: 'Hair Color: Blond',
      eyeColor: 'Eye Color: Blue',
    },
    { id: 4, name: 'Darth Vader', hairColor: 'Color: Blond', eyeColor: 'Blue' },
  ];
  const vehicles = [
    {
      id: 5,
      name: 'Darth Vader',
      gender: 'Gender: Male',
      hairColor: 'Hair Color: Blond',
      eyeColor: 'Eye Color: Blue',
    },
    { id: 6, name: 'Darth Vader', hairColor: 'Color: Blond', eyeColor: 'Blue' },
  ];

  return (
    <div className="characters-container">
      <h2>Characters</h2>
      <div className="card-container d-flex">
        {characters.map((characterData, index) => (
          <Character
            key={characterData.id}
            name={characterData.name}
            gender={characterData.gender}
            hairColor={characterData.hairColor}
            eyeColor={characterData.eyeColor}
          />
        ))}
      </div>

      <h2>Planets</h2>
      <div className="card-container d-flex">
        {planets.map((planetData, index) => (
          <Planet
            key={planetData.id}
            name={planetData.name}
            gender={planetData.gender}
            hairColor={planetData.hairColor}
            eyeColor={planetData.eyeColor}
          />
        ))}
      </div>

      <h2>Vehicles</h2>
      <div className="card-container d-flex">
        {vehicles.map((vehicleData) => (
          <Vehicle
            key={vehicleData.id}
            name={vehicleData.name}
            gender={vehicleData.gender}
            hairColor={vehicleData.hairColor}
            eyeColor={vehicleData.eyeColor}
          />
        ))}
      </div>
    </div>
  );
};
