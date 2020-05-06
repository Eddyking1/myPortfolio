import React, { useContext, useReducer, useState, useEffect } from "react";
import "./style.scss";
import { Redirect } from 'react-router-dom';
import { StoreContext } from '../../contextApi/'



function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "submit-data":
      return {
        userList: [
          ...state.userList,
          {
            user: {
              Email: action.data[0],
              pw1: action.data[1],
              pw2: action.data[2]
            }

          }
        ]
      };

    default:
      return state;
  }
}

function SignUp() {
  const { onlineState: [isOnline, setIsOnline] } = useContext(StoreContext)

  const [{ userList }, dispatch] = useReducer(reducer, { userList: [""] });

  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(userList);
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
            type: "submit-data",
            data: [data, data1, data2],
            counter,
          });
          setData("");
          setData1("");
          setData2("");
        }}
      >
        <h1> Sign up here!</h1>
        <div className="signLogin">
          <p> Email address</p>
          <input
            className="input"
            placeholder="Email"
            type="text"
            value={data}
            onChange={e => setData(e.target.value)}
            required={true}
          />
          <p> Password</p>
          <input
            className="input"
            placeholder="Password"
            type="password"
            value={data1}
            onChange={e => setData1(e.target.value)}
            required={true}
          />
          <p>Password Repeat</p>
          <input
            className="input"
            placeholder="Password repeat"
            type="password"
            value={data2}
            onChange={e => setData2(e.target.value)}
            required={true}
          />
          </div>
          <button className="buttonSubmit" type="submit" onClick={() => (setCounter(counter + 1))}> <p>Submit</p> </button>
          </form>
        <div className="googleLogin">
        <div class="g-signin2" data-onsuccess="onSignIn"></div>

        </div>
     {/*  {JSON.stringify(list)} */ }

    </div>
  );
}

export default SignUp;

