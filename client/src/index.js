import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import StoreProvider from './contextApi/index.js';
import WebbApp from './components/app/index.js';
import Login from './components/login/index';
import Signup from './components/signUp/index';
import NavBar from './components/navBar/navComponent.js';
import Shop from './components/shop/index.js'
import { IconContext } from 'react-icons/lib';
import './main.scss';
// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

ReactDOM.render(
     <StoreProvider>
          <Router>
               <IconContext.Provider value={{ className: 'react-icons' }}>
                    <NavBar />
                    <div name="Component routes">
                         <Route exact path="/" component={WebbApp} />
                         <Route path="/login" component={Login} />
                         <Route path="/signUp" component={Signup} />
                         <Route path="/shop" component={Shop} />
                    </div>
               </IconContext.Provider>
          </Router>
     </StoreProvider>
     ,
     document.getElementById('root'));

