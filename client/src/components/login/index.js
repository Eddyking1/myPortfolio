import React, {  useContext, useReducer, useState, useEffect } from "react";
import "./style.css";
import getCurrentUser from "./loginActions";
import {StoreContext} from '../../context/index.js';
const axios = require('axios');


 

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
    const {onlineState: [isOnline, setIsOnline]} = useContext(StoreContext)
    const [{ userList }, dispatch] = useReducer(reducer, { userList: [""] });

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    useEffect(() => {
      console.log(isOnline)
    });
  
    
  return (
    <div className="wrapper"> 
    <form
      className="formStyle"
      onSubmit={e => {
        console.log("submit did run");
        e.preventDefault();
        dispatch({
            type: "login-data",
            data: [email, password],
          });

      }}
    >
    <div> 
      <p> Email address</p>
      <input
        className="input"
        placeholder="Email"
        type="text"
        value={email}
        autoComplete={false}
        onChange={e => setEmail(e.target.value)}
        required={true}
      />
      <p> Password</p>
      <input
        className="input"
        placeholder="Password"
        type="password"
        value={password}
        autoComplete={false}
        onChange={e => setPassword(e.target.value)}
      />
      <input type="submit"></input>
    </div>
    </form>

   {JSON.stringify(userList)}

  </div>
  );
}

export default Login;

