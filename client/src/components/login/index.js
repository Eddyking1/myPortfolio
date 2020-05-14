import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./index.scss";
import { StoreContext } from '../../contextApi/index.js';
import homeIcon from '../../assets/Images/homeIcon.png';
import axios from 'axios';


function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "login-data":
      return {
      };

    case "wrong-Data":
      return {

      }

    default:
      return state;
  }
}


function Login() {
  const { onlineState: [isOnline, setIsOnline] } = useContext(StoreContext);
  const { loginData: [data, setData] } = useContext(StoreContext);
  const [redirect, setRedirect] = useState(false);
  const [url, setUrl] = useState(
    'https://fathomless-wildwood-66414.herokuapp.com/api/user',
  );
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result);
        console.log(data);
      }
      catch (error) {
        setTimeout(() => {
          setIsLoading(false);
          setRedirect(true);
          setIsError(true);
          console.log(isOnline, isLoading, data, redirect, isError, "error");
        }, 1500)
      }

    };

    const checkData = () => {
      if (data.length > 1) {
        setTimeout(() => {
          setIsOnline(true);
          setIsLoading(false);
          setRedirect(true);
          setIsError(false);
          console.log(isOnline, isLoading, data, redirect, isError, "request did run");
        }, 1500)
      }
      else {
        setTimeout(() => {
          setIsLoading(false);
          setRedirect(true);
          setIsError(true);
          console.log(isOnline, isLoading, data, redirect, isError, "request did but no user online");
        }, 1500)
      }
    }


    fetchData();
    checkData();
  }, [url]);

  const renderRedirect = () => {
    if (redirect && isError) {
      window.history.pushState(null, null, '/auth/google');
      window.location.reload();
    }
    else {
      window.history.pushState(null, null, '/profile');
      window.location.reload();
    }
  }

  return (
    (isLoading ? <div className="loading"> <img src={homeIcon} /> Loading..</div> :
      <div className="wrapper">
        {renderRedirect()}
      </div>)
  );
}

export default Login;

