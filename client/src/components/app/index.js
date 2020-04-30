/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { LandingPage } from '../landingPage/landingpage.js';
import Footer from '../footer/footer.js';
import './main.scss';

function WebbApp() {

  return (
      <div className="Main">
        <LandingPage />
        <Footer />
      </div>
  );
} export default WebbApp;

