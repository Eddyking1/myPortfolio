import React, { useState, useContext, useEffect } from 'react';
import homeIcon from '../../assets/Images/homeIcon.png';
import { Context } from '../../contextApi/newIndex.js';
import { MdReorder, MdShoppingCart, MdPersonAdd, MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import './nav.scss';


export default function NavBar() {
    const [state, dispatch] = useContext(Context);
    const [showHamburger, setShowHamburger] = useState(false);

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
    }, [])

    return (
        <div>
            <div className="hamNav">
                <div className="navBarFade">
                    <button className="navButton" onClick={() => { hamChecker() }}>
                        <MdReorder />
                    </button>
                    <div className="hamHomeIcon">
                    <Link to="/">
                    <img src={homeIcon} />
                        </Link>
                    </div>
                    <div className="hamContainer">
                        <div className="linkContainer">

                        <Link to="./" className="hamLinks" onClick={() => { hamChecker() }}>
                            <p> Home </p>
                        </Link>
                            <Link to="/shop" className="hamLinks" onClick={() => { hamChecker() }}>
                                <p> Services </p>
                            </Link>
                            {(state.isOnline ?
                                <div>
                                    <Link to="/login" className="hamLinks" onClick={() => { hamChecker() }}>
                                        <p> Profile </p>
                                    </Link>
                                    <Link to="/api/logout" className="hamLinks" onClick={() => { hamChecker() }}>
                                        <p> Logout </p>
                                    </Link>
                                </div>
                                :
                                <Link to="/login" className="hamLinks" onClick={() => { hamChecker() }}>
                                    <p> Login with google </p>
                                </Link>)}
                        </div>
                        <div className="socialIcons">
                        <p> Checkout this repo</p>
                            <a href="https://github.com/Eddyking1/examProjectv1.0">
                                <i className="fab fa-github-square fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav">
                <div className="navBarFade">
                    <div className="navBarContainer">
                        <div className="homeIcon">
                            <Link to="/">
                                <img src={homeIcon} alt="EK logo " />
                            </Link>
                        </div>
                        <div className="routeIcons">

                            {(!state.isOnline ?
                                <button className="navButton">
                                    <Link to="/login" className="links">
                                        <MdAccountCircle />
                                        <p> Login with google </p>
                                    </Link>
                                </button> :
                                <button className="navButton">
                                    <Link to="/login" className="links">
                                        <MdAccountCircle />
                                        <p> Profile </p>
                                    </Link>
                                </button>
                            )}
                            <button className="navButton">
                                <Link to="/shop" className="links">
                                    <MdShoppingCart />
                                    <p> Services </p>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

