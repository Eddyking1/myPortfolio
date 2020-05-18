
import React, { useState, } from 'react';
import Slider from '../slider/slider';
import { footerImages } from '../slider/sliderData';
import './index.scss';

export default function Shop() {

    let cardData = {
        names:['Webpack simple ', 'Webpack Midi', 'Webpack advanced'],
        cardText: ['Simple made site Landingpage and underPages with some dynamic aspects, mobile page simplified', 
        'Midi website underpages with dynamic components and responsive mobile version', 
        'Advanced routeing with dynamic components fully mobile responsiveness and custom desired functions'],
        images: ['image', 'image2', 'image3'],
    }

    function renderCards () {
        for (var i = 0; cardData.length >= i; i++){

        }

    }


    return (
        <div>
            <div className="shopWrapper">
                <div className="cardWrapper">
                    <div className="shopCards">
                        <p>
                            WebbPack Mini
                    </p>
                        <div className="infoCards">
                            <p>
                                Detaljer
                    </p>
                            <button>
                                <a href="/form">
                                    <p> intresserad? skicka en förfrågan</p>
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="shopCards">
                        <p>
                            WebbPack Mellan
                    </p>
                        <div className="infoCards">
                            <p>
                                Detaljer
                        </p>
                            <button>
                                <a href="/form">
                                    <p> intresserad? skicka en förfrågan</p>
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="shopCards">
                        <p>
                            WebbPack Stor
                    </p>

                        <div className="infoCards">
                            <p>
                                Detaljer
                     </p>
                            <button>
                                <a href="/form">
                                    <p> intresserad? skicka en förfrågan</p>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}