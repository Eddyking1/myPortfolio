import React, { useEffect } from 'react';
import reactLogo from '../../assets/Images/reactlogo.png';
import jsLogo from '../../assets/Images/jsLogo.png';
import cssLogo from '../../assets/Images/cssLogo.png';
import htmlLogo from '../../assets/Images/htmlLogo.png';
import picOfMe from '../../assets/Images/PicMe.WebP';
import nodejsLogo from '../../assets/Images/nodejsLogo.png';
import Slider from '../slider/slider.js';
import { landingPageImages } from '../slider/sliderData.js'
import './index.scss';

const LandingPage = () => {

    function pageLoad() {
        setTimeout(() => {
            isLoaded();
        }, 1000)
    }
    function isLoaded() {
        const sliderClass = document.getElementsByClassName('sliderLandingPage')[0];
        sliderClass.classList.remove('sliderLandingPage');
        sliderClass.classList.add('sliderLandingPageTransform');
    }

    useEffect(() => {
        pageLoad();
    }, [])

    return (
        <div className="landingPageContainer">
            <div className="sliderLandingPage">
                {Slider(landingPageImages)}
            </div>
            <div className="transformFade">
                <div className="profileImg">
                    <img className="smallImage"
                        src={picOfMe}
                        alt="profile"
                    />
                </div>
                <div className="landingPageText">
                    <p> Edward Kumerius </p>
                    <p> Front-end utvecklare</p>
                </div>

                <div className="skillImageContainer">
                    <div>
                        <img src={reactLogo}
                            alt="JavaScript React logo" />
                    </div>
                    <div>
                        <img src={jsLogo}
                            alt="JavaScript logo" />
                    </div>
                    <div>
                        <img src={cssLogo}
                            alt="Css3 Logo" />
                    </div>

                    <div>
                        <img src={htmlLogo}
                            alt="HTML5 Logo" />
                    </div>
                    <div>
                        <img src={nodejsLogo}
                            alt="Nodejs Logo" />
                    </div>
                </div>

                <div className="cards">
                    <div className="infoCard">
                        <h1>Hej!</h1>
                        <p>Jag erbjuder hemsidor/ webbappar från enklare landnings sidor till webbapp med E-commerce store</p>
                        <p>Testa några funktioner på denna sida som E-commerce store funktionen eller signa up med eller utan Google!</p>
                    </div>
                    <div className="infoCard">
                        <h1> Vad gör jag? </h1>
                        <p>Jag erbjuder dynamisk samt statiska
                            desktop och mobilanpassade webbappar med både enkla och avancerade JavaScript funktioner med user experience och user interface (UX-UI) i åtanke</p>
                        <p>Jag arbetar utifrån en krav specifikation från dig som behöver en hemsida/webbapp</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

