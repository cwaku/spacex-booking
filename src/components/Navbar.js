import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="main-nav">
        <div className="brand">
        </div>
        <div>
            <NavLink to="/">Rockets</NavLink>
            <NavLink to="/missions">Missions</NavLink>
            |
            <NavLink to="/profile">My Profile</NavLink>
        </div>
    </nav>
  );
}
