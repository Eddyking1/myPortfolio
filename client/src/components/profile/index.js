import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../contextApi/newIndex.js';
import axios from 'axios';
import './index.scss';

export const Profile = () => {
    const [state, dispatch] = useContext(Context);

    return (
        <div className="wrapper">
            {(!isOnline ?
                <div className="profileData">
                    <p>
                        this is the data
                    {state.user.googleId}
                    <p> credits:</p>
                    {state.user.credits}
                    </p>
                    {data.map(item, index) = () => (
                        <li key={index}>
                          <p>
                          {item.credits}{item.googleId}
                          </p>
                        </li>
                      ))}
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
