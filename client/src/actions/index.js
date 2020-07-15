import axios from 'axios';
import React, { useContext, useEffect } from "react";
import cookie from 'js-cookie';
import { FETCH_USER, AUTHORIZE_USER } from './types';
import { Context } from '../contextApi/newIndex.js';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

 export async function fetchAuthorizedUser() {
    let jwToken = cookie.getJSON('jwToken')
    try {
      let result = await axios({
        url: '/api/me',
        method: 'get',
        timeout: 8000,
        headers: { 'token': jwToken, 'Content-Type': 'application/json; charset=UTF-8' }
      })
      if (result.status == 200) {
        console.log(result)
      }
      return result.data;
    }
    catch (error) {
      console.error(error);
    }
  }