import React from 'react';
import logger from 'redux-logger';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';

import App from './components/App';
import css from '../public/styles.sass';
import eventsCalendar from './reducers/root';

const store = createStore(eventsCalendar, compose(applyMiddleware(logger)));

const renderApp = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp();
  });
}
