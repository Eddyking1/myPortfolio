import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import StoreProvider from './contextApi/index.js';
import WebbApp from './components/app/index.js';
import Login from './components/login/index';
import Signup from './components/signUp/index';
import NavBar from './components/navBar/navComponent.js';
// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

ReactDOM.render(
     <StoreProvider>
          <Router>
               <NavBar />
               <div name="Component routes">
                    <Route exact path="/" component={WebbApp} />
                    <Route path="/login" component={Login} />
                    <Route path="/signUp" component={Signup} />
                    <Route path="/shop" />
               </div>
          </Router>
     </StoreProvider>
     ,
     document.getElementById('root'));

