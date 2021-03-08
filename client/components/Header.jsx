import React from 'react';
import '../../public/styles.css'
import logo from '../assets/clearGVSLogo.png';
import Menu from './Menu.jsx';

const Banner = () => (
    <div>
        <div id="outerHeaderShell">
                <img id="headerBannerImage" src={logo}></img>
        </div>
        <Menu />
    </div>
    
);

export default Banner;