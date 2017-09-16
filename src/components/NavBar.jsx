import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      NavBar
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
    </div>
  );
};

export default NavBar;
