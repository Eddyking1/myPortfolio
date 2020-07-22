import React, { useReducer, useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import "../form/index.scss";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const [url, setUrl] = useState('/api/signup');
  
  const reDirect = () => {
    setTimeout(() => {
        return <Redirect to ="/profile"/>
    }, 1000);
  }

  const postData = async (email, password) => {
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
        //handle success
        setSuccess(true);
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        setSuccess(false);
        console.log(response);
      });
  };

  return (
    <div className="wrapper">
    {(success ? <p> Success! {reDirect()}</p> : <p> Error try again </p>)}
      <form
        className="formStyle"
        onSubmit={e => {
          console.log("submit did run");
          e.preventDefault();
          postData(email, password);
          setEmail("");
          setPassword("");
        }}
      >
        <div className="formInputs">
          <h1>Sign up</h1>
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

    </div>
  );
}

export default SignUp;

