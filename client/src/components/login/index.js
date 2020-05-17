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
            dispatch({ type: FETCH_USER, payload: result.data })
        }
      }
      catch (error) {
        setTimeout(() => {
          console.log("error", error);
        }, 1500)

      }
    };
    fetchData();
    checkData();

  }, [url]);

  const checkData = () => {
    if (state.user.iD.length < 3) {
      console.log("request did run and will redirect to profile");
      setIsError(false)
      setIsLoading(false);
      renderRedirect();
    }
    else {
      setIsError(true);
      renderRedirect();
    }
  }

  const renderRedirect = () => {
    if (isError === true) {
      window.history.pushState(null, null, '/auth/google');
      window.location.reload();
    }
    if (isError === false) {
      return <Redirect to='/profile'/>;
    }
  }

  return (
    (isLoading ? <div className="loading"> <img src={homeIcon} /> Loading..</div> :
      <div className="wrapper">
        {renderRedirect()}
      </div>)
  );
}