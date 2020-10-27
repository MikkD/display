import React, { useState, useEffect } from 'react';
import './Header.scss';
import snapImg from '../../assets/img/snap.png';
import Hamburger from './Hamburger/Hamburger';
import SideHamMenu from '../SideHamMenu/SideHamMenu';

function Header() {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => { window.addEventListener('resize', handleSideWindow) }, [])

    const handleSideWindow = () => window.innerWidth > 550 && setIsClicked(false) && cancelResize;

    const cancelResize = () => window.removeEventListener('resize', handleSideWindow);

    return (
        <React.Fragment>
            {/* <div className="header-wrapper-helper"> */}
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
                    <Hamburger isClicked={isClicked} clickHandler={setIsClicked} />
                </div>
            </header>
            <SideHamMenu isClicked={isClicked} />
            {/* </div> */}
        </React.Fragment >
    )
};

export default Header;


