import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
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