import React, { createContext, useState, useEffect, useContext, useReducer } from 'react';
import Reducer from "../reducers/authReducer";

export const Context = createContext(null);

let initialState = {
  isAuthorized: false,
  formAnswer: {},
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const storedData = sessionStorage.getItem('myAppData');
    return storedData ? JSON.parse(storedData) : {};
  });

  useEffect(() => {
    sessionStorage.setItem('myAppData', JSON.stringify(data));
  }, [data]);

}
 const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;



/* export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const storedData = sessionStorage.getItem('myAppData');
    return storedData ? JSON.parse(storedData) : {};
  });

  useEffect(() => {
    sessionStorage.setItem('myAppData', JSON.stringify(data));
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext); */