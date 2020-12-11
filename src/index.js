import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import * as serviceWorker from './serviceWorker';

// AntD
import './antd.css';

// Redux 
import store from './store/index'
import { Provider } from 'react-redux'

// React-Router
import { Router } from 'react-router-dom'

import Routes from './Router'


// History
import history from './helpers/history'



ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
        <Routes />
    </Provider>
  </Router>,
  document.getElementById("root")
);


serviceWorker.unregister();
