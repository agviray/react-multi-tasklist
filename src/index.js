import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
