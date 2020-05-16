import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../contextApi/newIndex.js';
import axios from 'axios';
import './index.scss';

export const Profile = () => {
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        
        return () => {
            
        }
    }, [])

    return (
        <div className="wrapper">
            {(state.isOnline ?
                <div className="profileData">
                    <p>
                        this is the data
                    <p> credits:</p>
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
