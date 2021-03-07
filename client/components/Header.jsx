import React from 'react';
import '../../public/styles.css'
import firstImage from '../assets/firstImage.jpg';

const Banner = () => (
    <div id="outerHeaderShell">
        <img id="headerBannerImage" src={firstImage}></img>
    </div>
);

export default Banner;