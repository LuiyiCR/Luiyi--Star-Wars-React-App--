import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Navbar = () => {
  const { store } = useContext(Context);
  const favCounter = store.favoritesCounter;

  return (
    <nav className="navbar navbar-light bg-light mb-3 container">
      <Link to="/">
        <img
          src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
          alt="Star Wars Logo"
          className="navbar-brand logo-img"
        />
      </Link>
      <div className="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          className="btn btn-primary dropdown-toggle d-flex align-items-center"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Favorites
          <span className="fav-counter-container d-flex justify-content-center align-items-center">
            <span className="fav-counter">{favCounter}</span>
          </span>
        </button>

        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <li>
            <a className="dropdown-item" href="#">
              Dropdown link
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Dropdown link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
