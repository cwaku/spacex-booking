import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navbar.css';
import logo from '../planet.png';

export default function Navbar() {
  return (
    <nav className="main-nav">
      <div className="brand">
        <img src={logo} alt="Logo" />
        <h1>Space Travelers&apos; Hub </h1>
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : null)}>Rockets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        |
        <NavLink to="/profile">My Profile</NavLink>
      </div>
    </nav>
  );
}
