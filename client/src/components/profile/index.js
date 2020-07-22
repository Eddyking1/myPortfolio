import React, { useState, useContext } from 'react';
import { Context } from '../../contextApi/newIndex.js';
import { Redirect } from "react-router-dom";
import homeIcon from '../../assets/Images/homeIcon.png';
import cookie from 'js-cookie';
import './index.scss';

function logout() {
    cookie.remove("jwToken");
    cookie.remove("isAuthorized");
}

export const Profile = () => {
    const [state, dispatch] = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 1100);
    return (
        (isLoading ? <div className="loading"> <img src={homeIcon} /> Loading..</div> :
            <div className="wrapper">
                {(state.isAuthorized ?
                    <div className="profileWrapper">
                        <div className="profileData">
                            <p> Email: </p>
                            <p> Amount of credits:</p>
                            <p> !Disclaimer! Credit system is yet to be applied</p>
                            <button onClick={() => logout()}>
                                <a href="/api/logout">Logout</a>
                            </button>
                        </div>
                        <div className="profileInfo">
                            <h1>What now?</h1>
                            <p>Congratulations you´ve successfully logged in to your account, now you can checkout the services i provide by clicking the button below.</p>
                            <button>
                                <a href="/shop">Services</a>
                            </button>
                        </div>
                    </div>
                    : <div> <p>Error</p> <Redirect to="/" /> </div>)}
            </div>)
    )
}

export default Profile;
