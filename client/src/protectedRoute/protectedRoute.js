import React, { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { fetchAuthorizedUser } from '../actions/index.js';
import { Context } from '../contextApi/newIndex.js';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [state, dispatch] = useContext(Context);

    return (
        (!state.isAuthorized.bool ? <Redirect to="/login" />
        : <div>
            <Route {...rest} render={props => <Component {...rest} {...props} />} />
        </div>)
    )
}

export default ProtectedRoute;