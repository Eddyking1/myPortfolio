import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../../contextApi/index.js';
import axios from 'axios';
import './index.scss';

export const Profile = () => {
    const { onlineState: [isOnline, setIsOnline] } = useContext(StoreContext);
    const { loginData: [data, setData] } = useContext(StoreContext);

    useEffect(() => {

    }, []);

    return (
        <div className="wrapper">
            {(!isOnline ? <div> offline </div> :
                <div className="profileData">
                    <p>
                        {data._id, data.credits}
                    </p>
                </div>
            )}

        </div>
    )
}

export default Profile;