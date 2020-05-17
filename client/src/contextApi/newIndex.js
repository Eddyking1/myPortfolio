import React, { createContext, useReducer } from 'react';
import Reducer from '../reducers/authReducer'

const initialState = {
  userId:'',
  userCredits:10,
  isOnline: false,
};


const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);


  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

export const Context = createContext(initialState);

export default Store;
