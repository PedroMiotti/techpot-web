import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import * as serviceWorker from './serviceWorker';

// AntD
import './antd.css';

// Redux 
import store from './store/index'
import { Provider } from 'react-redux'

// React-Router
import { Router, useLocation, withRouter } from 'react-router-dom'

import Routes from './Router'

// History
import history from './helpers/history'

function _ScrollToTop(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return props.children
}

const ScrollToTop = withRouter(_ScrollToTop);


ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </Provider>
  </Router>,
  document.getElementById("root")
);


serviceWorker.unregister();
