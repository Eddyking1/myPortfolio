import React, { useContext, useReducer, useState, useEffect } from "react";
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
  const { onlineState: [isOnline, setIsOnline] } = useContext(StoreContext)

  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState(
    'https://fathomless-wildwood-66414.herokuapp.com/api/user',
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);

      console.log(result.data);
      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);


  return (
   (isLoading ? <div className="wrapper"> 
    
    </div> : <div className="loading"> <img src={homeIcon}/> is not ready</div>)
  );
}

export default Login;

