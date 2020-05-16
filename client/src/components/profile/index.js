import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../contextApi/newIndex.js';
import axios from 'axios';
import './index.scss';

export const Profile = () => {

    return (
        <div className="wrapper">
            {(!isOnline ?
                <div className="profileData">
                    <p>
                        this is the data
                    {data.googleId}
                    <p> credits:</p>
                    {data.credits}
                    </p>
                    {data.map(item => (
                        <li key={item.googleId}>
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
