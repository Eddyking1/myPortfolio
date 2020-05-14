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

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await axios(url);
                setData(result.data);
                console.log(result.data)
                if (!error) {
                    setIsOnline(true);
                }
            }
            catch (error) {
                setTimeout(() => {
                    setIsLoading(false);
                    setRedirect(true);
                    setIsError(true);
                }, 1500)
            }
        };
        fetchData();
    }, [url]);

    return (
        <div className="wrapper">
            {(!isOnline ? <div> offline </div> :
                <div className="profileData">
                    {data.map((item, index) => (
                        <li key={index}>
                            <p>{item}</p>
                        </li>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Profile;