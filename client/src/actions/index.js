import axios from 'axios';
import cookie from 'js-cookie';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchAuthorizedUser = async () => {
  //authorization request
  let jwToken = cookie.getJSON('jwToken')
  axios({
    method: 'get',
    url: '/api/me',
    headers: { 'token': jwToken, 'Content-Type': 'application/json; charset=UTF-8' }
  }).then(function (response) {
    console.log(response, 'get?');
    return response;
    
  }).catch(function (err) {
    console.log(err);
    return console.error(err);
  })

}