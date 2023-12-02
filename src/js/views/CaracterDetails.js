import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { Context } from '../store/appContext';

import '../../styles/demo.css';

export const CaracterDetails = ({
  name,
  gender,
  eye_color,
  hair_color,
  skin_color,
  height,
}) => {
  const { id } = useParams();
  const [detailCharacters, setDetailCharacters] = useState({});

  useEffect(() => {
    const fetchDetailCharacters = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
        const data = await response.json();
        console.log('Fetched data Character Details:', data);
        setDetailCharacters(data.result.properties);
      } catch (error) {
        console.error('Error fetching characters details:', error);
      }
    };

    fetchDetailCharacters();
  }, []);

  return (
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
            <h2 className="card-title">{detailCharacters.name}</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur rem neque quidem.
            </p>
          </div>
        </div>
        <span className="border-divisor mt-5"></span>
        <div className="container mt-1 text-danger">
          <p className="card-text">{`Gender: ${detailCharacters.gender}`}</p>
          <p className="card-text">{`Eye Color: ${detailCharacters.eye_color}`}</p>
          <p className="card-text">{`Hair Color ${detailCharacters.hair_color}`}</p>
          <p className="card-text">{`Skin Color: ${detailCharacters.skin_color}`}</p>
          <p className="card-text">{`Height: ${detailCharacters.height}`}</p>
        </div>
      </div>
    </div>
  );
};
