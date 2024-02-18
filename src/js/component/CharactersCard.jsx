import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Character = ({ name, id }) => {
  const { store, actions } = useContext(Context);

  const isFavorite = store.selectedFavorites.some(
    (fav) => fav.uid === id && fav.type === 'character' && fav.isSelected
  );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      actions.removeFavorite({ uid: id, name, type: 'character' });
    } else {
      actions.incrementFavoritesCounter({ uid: id, name, type: 'character' });
    }
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        className="card-img-top"
        alt="Luke SkyWalker"
        onError={(e) => {
          e.target.src =
            'https://starwars-visualguide.com/assets/img/placeholder.jpg';
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="detail-fav-btn">
          <Link to={`/caracter-details/${id}`}>
            <button className="btn btn-outline-primary">
              Character Details!
            </button>
          </Link>
          <button
            className="btn btn-outline-danger"
            onClick={handleFavoriteClick}
          >
            <i
              className={
                isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'
              }
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};
