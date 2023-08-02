import React, { useContext } from 'react';
import cookie from 'js-cookie';
import { AUTHORIZE_USER } from "../actions/types";
import { Context } from './newIndex.js';

 function CheckCookies() {
    const [state, dispatch] = useContext(Context);
    let jwt = cookie.get("jwToken");
    let isAuth = cookie.get("isAuthorized");

    if (jwt) {
        dispatch({ type: AUTHORIZE_USER });
        return console.log(state, "should update state");
    }
    else {
        dispatch({ type: AUTHORIZE_USER });
        return console.log('no cookie found', jwt, isAuth)
    }

};

export default CheckCookies;