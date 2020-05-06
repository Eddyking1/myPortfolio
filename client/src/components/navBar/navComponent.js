import React, { useState, useEffect, useCallback } from 'react'
import { Link } from "react-router-dom";
import './nav.scss';


export default function NavBar() {
    const [scrollY, setScrollY] = useState();
    const [showHamburger, setShowHamburger] = useState(false);
    const [hamCss, setHamCss] = useState(['hamContainerAnimate', 'hamContainer']);

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

    useEffect(() => {

    });

    return (
        <div className="hamNav">
            <button className="navButton" onClick={() => { hamChecker() }}>
                <i className="material-icons">
                    reorder
                </i>
            </button>

            <div className="hamContainer">
                <div className="linkContainer">

                    <Link to="./" className="hamLinks" onClick={() => { hamChecker() }}>
                        <p> Home </p>
                    </Link>

                    <Link to="/login" className="hamLinks" onClick={() => { hamChecker() }}>
                        <p> Login </p>
                    </Link>

                    <Link to="/signup" className="hamLinks" onClick={() => { hamChecker() }}>
                        <p> Sign Up </p>
                    </Link>

                    <Link to="/shop" className="hamLinks" onClick={() => { hamChecker() }}>
                        <p> Store </p>
                    </Link>
                    
                </div>
                
                <div className="socialIcons">
                <a href="https://github.com/eddyking1">
                <i class="fab fa-github-square fa-3x"></i>
                </a>
                </div>
            </div>
        </div>

    )
}




/* <div className="nav">
            <div className="navBarContainer">
                <button className="navButton">
                    <Link to="/" className="links">
                        <i className="material-icons">
                            house
                        </i>
                        <p> Home </p>
                    </Link>
                </button>

                <button className="navButton">
                    <Link to="/login" className="links">
                        <i className="material-icons">
                            meeting_room
                        </i>
                        <p> Login </p>
                    </Link>
                </button>

                <button className="navButton">
                    <Link to="/signup" className="links">
                        <i className="material-icons">
                            add_circle
                        </i>
                        <p> Sign Up </p>
                    </Link>
                </button>

                <button className="navStoreButton">
                    <Link to="/shop" className="links">
                        <i className="material-icons">shopping_cart
                        </i>
                        <p> Store </p>
                    </Link>
                </button>
            </div>
        </div> */