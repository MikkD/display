import React, { useState, useEffect } from 'react';
import './Header.scss';
import snapImg from '../../assets/img/snap.png';
import Hamburger from './Hamburger/Hamburger';

function Header({ isClicked, setIsClicked }) {

    useEffect(() => { window.addEventListener('resize', handleSideWindow) }, [])

    const handleSideWindow = () => window.innerWidth > 550 && setIsClicked(false) && cancelResize;

    const cancelResize = () => window.removeEventListener('resize', handleSideWindow);

    return (
        <React.Fragment>
            <header className="header">
                <div className="header-icon">
                    <a><img src={snapImg} /></a>
                </div>
                <div className="header-menu">
                    <ul className="header-list">
                        <li><a>About</a></li>
                        <li><a>Experience</a></li>
                        <li><a>Work</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    <Hamburger isClicked={isClicked} setIsClicked={setIsClicked} />
                </div>
            </header>
        </React.Fragment >
    )
};

export default Header;


