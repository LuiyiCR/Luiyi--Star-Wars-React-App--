import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
          alt="Star Wars Logo"
          className="navbar-brand logo-img"
        />
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">Favorites</button>
        </Link>
      </div>
    </nav>
  );
};
