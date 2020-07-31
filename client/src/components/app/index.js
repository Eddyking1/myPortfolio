/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import LandingPage from '../landingPage/index.js';
import Footer from '../footer/footer.js';
import NavBar from '../navBar/navComponent.js';
import './main.scss';

function WebbApp() {
  return (
    <div className="Main">
          <LandingPage />
          <NavBar/>
          <Footer />
    </div>
  );
} export default WebbApp;

