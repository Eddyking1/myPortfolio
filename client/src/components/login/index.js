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
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState('/api/login');

  const checkLoginData = async (email, password) => {
    axios({
      method: 'post',
      url: url,
      data: {
        email: email,
        password: password
      },
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
      .then(function (response) {
        setIsLoading(true);
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        setIsError(true)
        console.log(response);
      });
  };
  return (
    (isLoading ? <div className="loading"> <img src={homeIcon} /> Loading..</div> :
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
            {(isError ? <p> wrong credentials </p> : " ")}
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
            <button className="buttonSubmit" type="submit"> <p>Submit</p> </button>
          </div>
        </form>
        {/*  {JSON.stringify(list)} */}

      </div>)
  );
}

