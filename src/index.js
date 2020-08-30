import React from 'react';
import ReactDOM from 'react-dom';

import './Index.css'


import Routes from './Router'

import * as serviceWorker from './serviceWorker';

// React-Router
import { Router } from 'react-router-dom'

// History
import history from './helpers/history'

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.getElementById('root')
);


serviceWorker.unregister();
