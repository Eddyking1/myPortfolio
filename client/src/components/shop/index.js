
import React, { useState, } from 'react';
import Slider from '../slider/slider';
import { landingPageImages } from '../slider/sliderData';
import './index.scss';

export default function Shop() {

    return (
        <div>
            <div className="shopWrapper">
                <div className="shopCards">
                    <p>
                        WebbPack Mini
                    </p>
                    {Slider(landingPageImages)}
                    <div className="infoCards">
                        <p>
                            Detaljer
                    </p>
                    </div>
                </div>
                <div className="shopCards">
                    <p>
                        WebbPack Mellan
                    </p>
                    {Slider(landingPageImages)}
                    <div className="infoCards">
                        <p>
                            Detaljer
                        </p>
                    </div>
                </div>
                <div className="shopCards">
                    <p>
                        WebbPack Stor
                    </p>
                    {Slider(landingPageImages)}
                    <div className="infoCards">
                        <p>
                            Detaljer
                     </p>
                     <button>
                     <p> intresserad? skicka en förfrågan</p>
                     </button>
                    </div>
                </div>

            </div>
        </div>
    )
}