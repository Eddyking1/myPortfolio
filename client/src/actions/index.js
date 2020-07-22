import axios from 'axios';
import cookie from 'js-cookie';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export async function fetchAuthorizedUser() {
  let jwToken = cookie.getJSON('jwToken');
  if (!jwToken == undefined) {
    try {
      let result = await axios({
        url: '/api/me',
        method: 'get',
        timeout: 6000,
        headers: { 'token': jwToken, 'Content-Type': 'application/json; charset=UTF-8' }
      })
      if (result.status === 200) {
        console.log(result)
        return result.data;
      }
    }
    catch (error) {
      console.error(error);
    }
  }
}


