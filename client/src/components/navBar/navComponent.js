import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './nav.scss';

 
export default class NavBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             scroll: false,
             navbarScroll:false,
        }
    }
    
    render() {
        return (
            <div className="nav">
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
            </div>
        )
    }
};




