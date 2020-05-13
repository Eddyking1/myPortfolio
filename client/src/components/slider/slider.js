import React from 'react';
import ImageGallery from 'react-image-gallery';
import './style.scss';

export default function Slider (props) {
    return (
            <ImageGallery items={props} showThumbnails={false} showPlayButton={false}/>
    )
};
