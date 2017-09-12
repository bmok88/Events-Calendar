import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import Main from './Main';

const App = () => (
  <div
    onClick={e => {
      if (e.target === document.getElementById('event-modal')) {
        document.getElementById('event-modal').style.display = 'none';
      }
    }}
  >
    <NavBar />
    <Main />
  </div>
);

export default App;
