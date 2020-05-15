import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import StoreProvider from './contextApi/index.js';
import WebbApp from './components/app/index.js';
import Login from './components/login/index';
import Form from './components/form/index';
import Profile from './components/profile/index';
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
               <IconContext.Provider value={{ color: 'white', className: 'react-icons' }}>
                    <NavBar />
                    <div name="Component routes">
                         <Route exact path="/" component={WebbApp} />
                         <Route path="/login" component={Login} />
                         <Route path="/profile" component={Profile}/>
                         <Route path="/shop" component={Shop} />
                         <Route path="/form" component={Form} />
                    </div>
               </IconContext.Provider>
          </Router>
     </StoreProvider>
     ,
     document.getElementById('root'));

