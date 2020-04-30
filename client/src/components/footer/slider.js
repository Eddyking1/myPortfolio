import React from 'react';
import { StoreContext } from '../context/index.js';
import {useContext, useState} from 'react'

function slideContent () {
const { slideShowData: [sliderData, setSliderData] } = useContext(StoreContext);

}


const slider = () => {
    return (
        <div>
            <img src={...sliderData}>
            </img>
        </div>
    )
}

export default slider;
