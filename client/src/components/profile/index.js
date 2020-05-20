import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../contextApi/newIndex.js';
import { Redirect } from "react-router-dom";
import './index.scss';

export const Profile = () => {
    const [state, dispatch] = useContext(Context);



    useEffect(() => {

        console.log(state);
        return () => {
        }
    }, [])

    return (
        <div className="wrapper">
            {(state.isOnline ?
                <div className="profileWrapper">
                    <div className="profileData">
                        <p> Email: {state.userEmail} </p>
                        <p> Amount of credits: {state.userCredits}</p>
                        <p> !Disclaimer! Credit system is yet to be applied</p>
                        <button>
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
                :
                <div>
                    <Redirect to='/login' />;
                </div>
            )}

        </div>
    )
}

export default Profile;
