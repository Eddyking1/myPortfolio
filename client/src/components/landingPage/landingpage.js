/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import reactLogo from '../../assets/Images/reactlogo.png'
import jsLogo from '../../assets/Images/jsLogo.png';
import cssLogo from '../../assets/Images/cssLogo.png';
import htmlLogo from '../../assets/Images/htmlLogo.png';
import picOfMe from '../../assets/Images/PicMe.WebP';
import nodejsLogo from '../../assets/Images/nodejsLogo.png';

export class LandingPage extends Component {
    render() {
        return (
            <div className="LPContainer">
                <div className="profileImg">
                    <img className="smallImage" src={picOfMe}
                        alt="profile-picture"
                    />
                </div>
                <div className="landingPageText">
                    <p> Edward Kumerius </p>
                    <p> FrontEnd Webbutvecklare</p>
                </div>

                <div className="skillContainer">
                    <div className="skillPicture">
                        <img src={reactLogo}
                            alt="picture of JavaScript React logo" />
                    </div>
                    <div className="skillPicture">
                        <img src={jsLogo}
                            alt="picture of JavaScript logo" />
                    </div>
                    <div className="skillPicture">
                        <img src={cssLogo}
                            alt="picture of Css3Logo" />
                    </div>

                    <div className="skillPicture">
                        <img src={htmlLogo}
                            alt="picture of html5Logo" />
                    </div>
                    <div className="skillPicture">
                        <img src={nodejsLogo}
                            alt="picture of nodejsLogo" />
                    </div>
                </div>
            </div>
        )
    }
}

