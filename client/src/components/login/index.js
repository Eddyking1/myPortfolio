import React, { useState, useEffect, useReducer, useContext } from "react";
import { Redirect } from "react-router-dom";
import "./index.scss";
import { Context } from '../../contextApi/newIndex.js';
import homeIcon from '../../assets/Images/homeIcon.png';
import axios from 'axios';
import { FETCH_USER } from "../../actions/types";


export default function Login() {
  const [state, dispatch] = useContext(Context);

  const [url, setUrl] = useState(
    'https://fathomless-wildwood-66414.herokuapp.com/api/user',
  );

  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(url);
        if (result.data) {
          let data = Object.keys(result.data);
          data.forEach(items => {
            console.log(items, data)
            dispatch({ type: FETCH_USER, ...data[items] })
          });
          console.log('that was userdata', result.data, data);
        }
      }
      catch (error) {
        setTimeout(() => {
          console.log("error", error);
        }, 1500)

      }
    };
    fetchData();
    console.log(state.user);

    checkData();

  }, [url]);

  const checkData = () => {
    if (state.user.googleId) {
      console.log("request did run and will redirect to profile");
      setIsError(false)
      setIsLoading(false);
      console.log(state.user)
    }
  }

  const renderRedirect = () => {
    if (isError) {
      window.history.pushState(null, null, '/auth/google');
      window.location.reload();
    }
    if (!isError) {
      window.history.pushState(null, null, '/profile');
    }
  }

  return (
    (isLoading ? <div className="loading"> <img src={homeIcon} /> Loading..</div> :
      <div className="wrapper">
        {renderRedirect()}
      </div>)
  );
}