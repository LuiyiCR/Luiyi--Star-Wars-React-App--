import React, { useState } from 'react';
import rigoImage from '../../img/rigo-baby.jpg';
import '../../styles/home.css';
import { Character } from '../component/CardCharacters.jsx';

export const Home = () => {
  const [characters, setCharacters] = useState([]);

  return (
    <div className="card-container">
      {characters.map((item) => (
        <Character />
      ))}
    </div>
  );
};
