import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../../contextApi/index.js';
import axios from 'axios';
import './index.scss';

export const Profile = () => {
    const { onlineState: [isOnline, setIsOnline] } = useContext(StoreContext);
    const { loginData: [data, setData] } = useContext(StoreContext);
    const [redirect, setRedirect] = useState(false);
    const [url, setUrl] = useState(
        'https://fathomless-wildwood-66414.herokuapp.com/api/user',
    );
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="wrapper">
            {(!isOnline ?
                <div className="profileData">
                    <p>
                        this is the data
                    {data.hits.googleId}
                    <p> credits:</p>
                    {data.hits.credits}
                    </p>
                    {data.hits.map(item => (
                        <li key={item.googleId}>
                          <a href={item.credits}>{item.googleId}</a>
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
