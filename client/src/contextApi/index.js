import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {

  const [isOnline, setIsOnline] = React.useState(false);
  const [registeredUser, setRegisteredUser] = React.useState([]);
  const [loadpage, setPage] = React.useState({});
  const [sliderData, setSliderData] = React.useState([]);
  /*  lägg till flera hooks om det behövs för till globala storen - lägg till hooken
  i store objeckt arrayen som ett objeckt, sedan använd useContext(StoreContext) och 
  destructa ut objektet som behövs användas.  som det görs i storen 
  ( const {objeckt: [hook, sethook]} = useContext(StoreContext)*/
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