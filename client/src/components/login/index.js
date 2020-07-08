import React, { useState, useEffect, useReducer, useContext } from "react";
import { Redirect } from "react-router-dom";
import "./index.scss";
import { Context } from '../../contextApi/newIndex.js';
import homeIcon from '../../assets/Images/homeIcon.png';
import axios from 'axios';
import { FETCH_USER } from "../../actions/types";


export default function Login() {
  const [state, dispatch] = useContext(Context);
  const [isError, setIsError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [url, setUrl] = useState(
    '/api/user',
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(url);
        if (result.data) {
          dispatch({ type: FETCH_USER, payload: result.data })
          setTimeout(() => {
            checkData();
          }, 1500)
        } else {
          setIsError(true);
          setIsLoading(false);
          checkData();
        }
      }
      catch (error) {
        setTimeout(() => {
          console.log("error", error);
          console.log(isError);
        }, 1500)

      }
    };

    fetchData();
  }, [url]);

  const checkData = () => {
    if (state.isOnline) {
      console.log("request did run and will redirect to profile");
      setIsError(false)
      setIsLoading(false);
    }
    else {
      setIsLoading(false);
      setIsError(true);
    }
  }
  const renderRedirect = () => {
    if (isError) {
      window.history.pushState(null, null, '/auth/google');
      window.location.reload();
    }
    if (!isError) {
      return <Redirect to='/profile' />;
    }
  }

  return (
    (isLoading ? <div className="loading"> <img src={homeIcon} /> Loading..</div> :
      <div className="wrapper">
        {renderRedirect()}
      </div>)
  );
}