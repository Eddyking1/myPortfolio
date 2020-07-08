import React, { useReducer, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../form/index.scss";
import { Context } from '../../contextApi/newIndex'
import { SUBMIT_SIGNUP_FORM } from "../../actions/types";
import { set } from "lodash";

function SignUp() {
  const [state, dispatch] = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [url, setUrl] = useState('/signup');
  
  const postData = async (email, password) => {
    axios({
      method: 'post',
      url: url,
      data: {email: email, password: password},
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
          //handle success
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
  };
  useEffect(() => {
    console.log(state);
  });

  return (
    <div className="wrapper">
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
      {/*  {JSON.stringify(list)} */}

    </div>
  );
}

export default SignUp;

