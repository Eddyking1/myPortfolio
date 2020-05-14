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
            {(isOnline ? <div> online </div> :
                <div className="profileData">
                    {data.hits.map(item => (
                        <li key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Profile;