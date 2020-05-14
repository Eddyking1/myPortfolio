import React, { useState, useContext, } from 'react';
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

        const mapProfileData = () => {

        };

    }, [url]);

    return (
        <div className="wrapper">
            {(isOnline ? <div> online </div> :
                <div className="profileData">

                </div>
            )}

        </div>
    )
}

export default Profile;