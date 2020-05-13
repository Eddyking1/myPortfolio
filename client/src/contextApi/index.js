import React, {useState, createContext, useReducer} from 'react';
import {reducer, initialState} from './reducers';
import { useActions } from './actions';
import { applyMiddleware } from './middleware';

export const StoreContext = createContext(initialState);

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);      

  const [isOnline, setIsOnline] = useState(false);
  const [registeredUser, setRegisteredUser] = useState([]);
  const [loadpage, setPage] = useState({});
  const [sliderData, setSliderData] = useState([]);
  /*  lägg till flera hooks om det behövs för till globala storen - lägg till hooken
  i store objeckt arrayen som ett objeckt, sedan använd useContext(StoreContext) och 
  destructa ut objektet som behövs användas.  som det görs i storen 
  ( const {objeckt: [hook, sethook]} = useContext(StoreContext)*/

  const enhancedDispatch = applyMiddleware(dispatch);
  
  const actions = useActions(state, enhancedDispatch);
  
  const store = {
    onlineState: [isOnline, setIsOnline],
    isRegistered: [registeredUser, setRegisteredUser],
    landingpage: [loadpage, setPage],
    slideShowData : [sliderData, setSliderData],
  }
  /* returnera contextets values och children vilket gör så att allt som finns innuti
  storeContextet visas t.ex app.js när contexten wrappas
  runt index.js   så render ( <storeContext> <app/>  <storecontext/> ) */
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}



/* import React, { useState, createContext, useReducer } from 'react';
import { reducer, initialState } from './reducers';
import { useActions } from './actions';
import { applyMiddleware } from './middleware';

export const StoreContext = createContext(initialState);

export default ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const [isOnline, setIsOnline] = useState(false);
  const [registeredUser, setRegisteredUser] = useState([]);
  const [loadpage, setPage] = useState({});
  const [sliderData, setSliderData] = useState([]);
  /*  lägg till flera hooks om det behövs för till globala storen - lägg till hooken
  i store objeckt arrayen som ett objeckt, sedan använd useContext(StoreContext) och 
  destructa ut objektet som behövs användas.  som det görs i storen 
  ( const {objeckt: [hook, sethook]} = useContext(StoreContext)*/

  /*const enhancedDispatch = applyMiddleware(dispatch);

  const actions = useActions(state, enhancedDispatch);

  const store = {
    onlineState: [isOnline, setIsOnline],
    isRegistered: [registeredUser, setRegisteredUser],
    landingpage: [loadpage, setPage],
    slideShowData: [sliderData, setSliderData],
  }
  /* returnera contextets values och children vilket gör så att allt som finns innuti
  storeContextet visas t.ex app.js när contexten wrappas
  runt index.js   så render ( <storeContext> <app/>  <storecontext/> ) */
  /*return <StoreContext.Provider value={store, enhancedDispatch, actions}>{children}</StoreContext.Provider> 
}  */