import React, { useContext, useReducer, useState, useEffect } from "react";
import "./index.scss";
import getCurrentUser from "./loginActions";
import { StoreContext } from '../../contextApi/index.js';
import { fetchUser } from '../../actions/index'
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
  const { onlineState: [isOnline, setIsOnline] } = useContext(StoreContext)
  const [{ userList }, dispatch] = useReducer(reducer, { userList: [""] });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'https://fathomless-wildwood-66414.herokuapp.com/api/user',
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(url);

      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);


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
            onChange={e => setEmail(e.target.value)}
            required={true}
          />
          <p> Password</p>
          <input
            className="input"
            placeholder="Password"
            type="password"
            value={password}
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

