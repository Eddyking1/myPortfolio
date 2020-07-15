import React, { useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';
import { fetchAuthorizedUser } from '../actions/index.js';
import { Context } from '../contextApi/newIndex.js';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [state, dispatch] = useContext(Context);

    const Authed = state.isAuthorized;
    console.log(Authed);
    return (
        <Route {...rest} render={props => <Component {...rest} {...props} />
        } />
    )
}

export default ProtectedRoute;