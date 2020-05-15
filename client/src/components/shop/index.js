
import React, { useState, } from 'react';
import Slider from '../slider/slider';
import Form from '../form/index';
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
                    {Slider(landingPageImages)}
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
                    {Slider(landingPageImages)}
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
    )
}