import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Store from './contextApi/newIndex.js';
import CheckCookies from './contextApi/checkCookies.js';
import WebbApp from './components/app/index.js';
import Login from './components/login/index';
import Form from './components/form/index';
import Profile from './components/profile/index';
import NavBar from './components/navBar/navComponent.js';
import Shop from './components/shop/index.js';
import SignUp from './components/signUp/index.js';
import ProtectedRoute from './protectedRoute/protectedRoute.js';
import { IconContext } from 'react-icons/lib';
import './main.scss';
import axios from 'axios';
window.axios = axios;



ReactDOM.render(
     <Store>
          <Router>
               <IconContext.Provider value={{ color: 'black', className: 'react-icons' }}>
                    <div name="Component routes">
                         <Switch>
                              <Route exact path="/" component={WebbApp} />
                              <Route exact path="/signup" component={SignUp} />
                              <Route exact path="/login" component={Login} />
                              <Route exact path="/shop" component={Shop} />
                              <ProtectedRoute exact path="/profile" component={Profile} />
                              <ProtectedRoute exact path="/form" component={Form} />
                         </Switch>
                    </div>
               </IconContext.Provider>
          </Router>
     </Store>
     ,
     document.getElementById('root'));

