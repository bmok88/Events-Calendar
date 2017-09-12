import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      NavBar
      <ul id="nav">
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
