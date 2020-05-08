import React, { useState, useLayoutEffect } from 'react';
import homeIcon from '../../assets/Images/homeIcon.png';
import { Link } from "react-router-dom";
import './nav.scss';


export default function NavBar() {
    const [showHamburger, setShowHamburger] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    function hamChecker() {
        var x = document.getElementsByClassName('hamContainer')[0];
        if (showHamburger === false) {
            x.classList.add("hamContainerAnimate");
            setShowHamburger(!showHamburger);
        }
        else {
            x.classList.remove("hamContainerAnimate");
            setShowHamburger(!showHamburger);
        }
    }

    function checkWidth() {
        setScreenWidth(window.innerWidth);
    }

    useLayoutEffect(() => {
        checkWidth()
    });

    return (
        <div>
            {screenWidth < 900 ? (
                <div className="hamNav">
                    <div className="navBarFade">
                        <button className="navButton" onClick={() => { hamChecker() }}>
                            <i className="material-icons">reorder</i>
                        </button>
                        <div className="hamHomeIcon">
                            <Link to="/">
                                <img src={homeIcon} />
                            </Link>
                        </div>
                        <div className="hamContainer">
                            <div className="linkContainer">

                                <Link to="/shop" className="hamLinks" onClick={() => { hamChecker() }}>
                                    <p> Store </p>
                                </Link>
                                <Link to="./" className="hamLinks" onClick={() => { hamChecker() }}>
                                    <p> Home </p>
                                </Link>

                                <Link to="/login" className="hamLinks" onClick={() => { hamChecker() }}>
                                    <p> Login </p>
                                </Link>

                                <Link to="/signup" className="hamLinks" onClick={() => { hamChecker() }}>
                                    <p> Sign Up </p>
                                </Link>

                            </div>

                            <div className="socialIcons">
                                <a href="https://github.com/eddyking1">
                                    <i className="fab fa-github-square fa-3x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )
                : (<div className="nav">
                    <div className="navBarFade">
                        <div className="homeIcon">
                            <Link to="/">
                                <img src={homeIcon} />
                            </Link>
                        </div>

                        <div className="navBarContainer">
                            <button className="navButton">
                                <Link to="/login" className="links">
                                    <i className="material-icons">meeting_room</i>
                                    <p> Login </p>
                                </Link>
                            </button>

                            <button className="navButton">
                                <Link to="/signup" className="links">
                                    <i className="material-icons">add_circle</i>
                                    <p> Sign Up </p>
                                </Link>
                            </button>

                            <button className="navButton">
                                <Link to="/shop" className="links">
                                    <i className="material-icons">shopping_cart</i>
                                    <p> Store </p>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                )}
        </div>
    )
}

