import React from 'react';
import Slider from '../slider/slider.js'
import { footerImages } from '../slider/sliderData.js'
import './footer.scss';

export default function Footer() {

    return (
        <div className="footer">
            <div className="slideShow">
                <h1>Kolla igenom WebbDev Dealsen!</h1>
                {Slider(footerImages)}
            </div>

            <div className="fContact">
                <p>
                    Email: Edward.kumerius@gmail.com
                    </p>
            </div>
        </div>
    )

}


