import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <ul id="nav">
        <li>
          <Link to="/calendar" style={{ textDecoration: 'none' }}>
            Calendar
          </Link>
        </li>
        <li>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
