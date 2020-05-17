import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../contextApi/newIndex.js';
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
                <div className="profileData">
                    <p>
                        this is your unique id {state.userId}
                        
                    </p>

                    <p>
                        Amount of credits: {state.userCredits}
                    </p>

                    <button>
                        <a href="/api/logout">
                            logout
                        </a>
                    </button>
                </div>
                :
                <div>
                    <p> offline</p>
                </div>
            )}

        </div>
    )
}

export default Profile;
