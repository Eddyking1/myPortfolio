import React, { useState, useEffect, useReducer, useContext } from "react";
import reactLogo from '../../assets/Images/reactlogo.png';
import jsLogo from '../../assets/Images/jsLogo.png';
import cssLogo from '../../assets/Images/cssLogo.png';
import htmlLogo from '../../assets/Images/htmlLogo.png';
import picOfMe from '../../assets/Images/PicMe.WebP';
import nodejsLogo from '../../assets/Images/nodejsLogo.png';
import cookie from 'js-cookie';
import './index.scss';
import { fetchAuthorizedUser } from '../../actions/index.js'
import { AUTHORIZE_USER } from "../../actions/types";
import { Context } from '../../contextApi/newIndex.js';


const LandingPage = () => {
    const [state, dispatch] = useContext(Context);

    function pageLoads() {
        setTimeout(() => {
            isLoaded();
            fetchAuthorizedUser().then(data => dispatch({ type: AUTHORIZE_USER, data }, cookie.set('isAuthorized', data)));
        }, 1000)
    }
    function isLoaded() {
        const sliderClass = document.getElementsByClassName('sliderLandingPage')[0];
        sliderClass.classList.remove('sliderLandingPage');
        sliderClass.classList.add('sliderLandingPageTransform');
    }

    useEffect(() => {
        pageLoads();
        cookie.get("isAuthorized")
    }, [])

    let logoData = {
        images: [reactLogo, jsLogo, cssLogo, htmlLogo, nodejsLogo],
        imageAlts: ['Javascript react Logo', 'javaScript Logo', 'css3 Logo', 'html5 Logo', 'nodeJs Logo']
    }

    let textData = {
        textHeadline: ['Hello!', 'What to do here?'],
        text: ['I offer dynamic as well as static webbapplications with advanced Javascript features and performance in mind aswell including the latest trends in UX-UI flow and design.',
            'If you choose me to be your Webdeveloper i would need a descriptive specification of functions and flow of the desired app.',
            'Sign up and check the service tab in navigation menue and you will be presented with three standard packages i provide, if those is not to your liking you will be able to fill out a form where you explain more about what you need.',
            'When you sign up your profile you will be able to monitor your request and chat with me.']
    }

    const renderLogos = logoData.images.map((img, index) => {
        return <img key={index} src={img} alt={logoData.imageAlts[index]}></img>
    });

    const renderText = textData.text.splice(0, 1).map((texts, index) => {
        return (<div className="cardText"> <p key={index}> {texts} </p> </div>)
    });
    const renderTextTwo = textData.text.splice(0, 3).map((texts, index) => {
        return (<div className="cardText"> <p key={index}> {texts} </p> </div>)
    });

    const renderTextCard = textData.textHeadline.splice(0, 1).map((headLine, index) => {
        return (<div key={index} className="infoCard"> <h1> {headLine} </h1>  {renderText}</div>)
    });

    const renderTextCardTwo = textData.textHeadline.splice(0, 1).map((headLine, index) => {
        return (<div key={index} className="infoCard"> <h1> {headLine} </h1>  {renderTextTwo}</div>)
    });

    return (
        <div className="landingPageContainer">
            <div className="sliderLandingPage">
                {/*  {Slider(landingPageImages)}*/}
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
                    <p> Front-end Developer</p>
                </div>

                <div className="skillImageContainer">
                    {renderLogos}
                </div>
                <div className="cards">
                    {renderTextCard}
                    {renderTextCardTwo}
                </div>
                <div>
                </div>

            </div>
        </div>
    );
}

export default LandingPage;

