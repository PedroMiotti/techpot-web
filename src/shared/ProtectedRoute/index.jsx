import React from 'react';

//Route
import { Route, Redirect } from 'react-router-dom';

// Helpers
import { getCookie } from '../../helpers/handleCookie'

const ProtectedRoute = ({component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        getCookie('_auth') != ""
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

export default ProtectedRoute;
