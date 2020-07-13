/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import LandingPage from '../landingPage/index.js';
import Footer from '../footer/footer.js';
import './main.scss';

function WebbApp() {
  const [visited, setVisited] = useState(true);
/* 
  const popup = () => {
    let firstVisit = localStorage.getItem('firstTime');
    if (firstVisit === null) {
      setVisited(false);
      localStorage.setItem('firstTime', true);
      setTimeout(() => {
        let x = document.getElementById('popUp').style.display = 'flex';
      }, 1000);
    } else {
      setVisited(true);
    }
  }
  function closePopup() {
    setVisited(true);
  }
  useEffect(() => {
    popup();
  }, []) */

  return (
    <div className="Main">
      {(!visited ?
        <div id="popUp">
          <div id="popUpMessage">
            <p>
              Friendly reminder that this website is under construction and will change under time and most likely have different look/feel when done.
            </p>
            <p>
              This website does not offer any services at this moment, its just for demonstration purposes
            </p>
            <p> This website uses cookies/localStorage if you continue to use this website you agree the usage of cookies </p>
            <button onClick={() => {
            }}>
              <p>close</p>
            </button>
          </div>
        </div> :
        <>
          <LandingPage />
          <Footer />
        </>
      )}
    </div>
  );
} export default WebbApp;

