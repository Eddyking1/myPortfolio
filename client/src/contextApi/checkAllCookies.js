import React from 'react';
import cookie from 'js-cookie';
import { fetchAuthorizedUser } from '../../actions/index.js'
import { AUTHORIZE_USER } from "../../actions/types";
import { Context } from './newIndex.js';


export const checkAllCookies = () => {
    fetchAuthorizedUser().then(data => dispatch({ type: AUTHORIZE_USER, data }));



}