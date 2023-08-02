import React, { useState, useContext } from "react";
import { redirect } from "react-router-dom";
import "./index.scss";
import { Context } from '../../contextApi/newIndex.js';
import homeIcon from '../../assets/Images/homeIcon.png';
import axios from 'axios';
import { fetchAuthorizedUser } from "../../actions/index";
import cookie from 'js-cookie';
import { AUTHORIZE_USER } from "../../actions/types";

export default function Login() {
  const [state, dispatch] = useContext(Context);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState('/api/login');

  const checkLoginData = async (email, password) => {
    try {
      setIsLoading(true);
      const response = await axios.post(url, { email, password }, { headers: { 'Content-Type': 'application/json; charset=UTF-8' } });
      console.log('got response');
      const jwToken = response.data.token;
      cookie.set('jwToken', jwToken, { expires: 2 });
      const data = await fetchAuthorizedUser();
      dispatch({ type: AUTHORIZE_USER, data });
      cookie.set('isAuthorized', state.isAuthorized, { expires: 2 });
      setTimeout(() => {
        setIsLoading(false);
        setIsError(false);
      }, 1500);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  const renderRedirect = () => {
    if (state.isAuthorized) {
      return <redirect to='/profile' />;
    }
  };

  console.log(state.isAuthorized);

  return (
    isLoading ? (
      <div className="loading">
        <img src={homeIcon} alt="Loading" /> Loading..
      </div>
    ) : (
      <div className="wrapper">
        <form
          className="formStyle"
          onSubmit={e => {
            console.log("submit did run");
            e.preventDefault();
            checkLoginData(email, password);
            setEmail("");
            setPassword("");
          }}
        >
          <div className="formInputs">
            <h1>Login</h1>
            {isError && <p style={{ color: 'red' }}> Wrong credentials </p>}
            <p> Email address</p>
            <input
              className="input"
              placeholder="Email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required={true}
            />
            <p> Password </p>
            <input
              className="input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required={true}
            />
            <button className="buttonSubmit" type="submit">
              <p>Submit</p>
            </button>
          </div>
        </form>
        {renderRedirect()}
      </div>
    )
  );
}
