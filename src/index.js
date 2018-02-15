import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

// normalizer
import 'normalize.css';

// stores
import stores from './stores';

// components
import App from './App';

ReactDOM.render(
  (
    <Provider {...stores}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'),
);
