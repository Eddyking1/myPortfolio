import React from 'react';
import Slider from '../slider/slider.js'
import { footerImages } from '../slider/sliderData.js'
import './footer.scss';

export default function Footer() {

    return (
        <div className="footer">
{/*             <div className="slideShow">
                <h1>Kolla igenom WebbDev Dealsen!</h1>
                {Slider(footerImages)}
    </div> */}
    <a href="https://www.testdome.com/cert/2c13697ff13e4fbcb542f1ca0e22bfc4" class="testdome-certificate-stamp silver"><span class="testdome-certificate-name">Edward kumerius</span><span class="testdome-certificate-test-name">JavaScript </span><span class="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>
            <div className="fContact">
                <p>
                    Email: Edward.kumerius@gmail.com <br/>
                     Svarar alltid på mail!
                </p>
            </div>
        </div>
    )

}


