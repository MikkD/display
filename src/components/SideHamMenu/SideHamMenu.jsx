import React from 'react';
import './SideHamMenu.scss';
import { GoMarkGithub } from 'react-icons/go';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';



function SideHamMenu({ isClicked }) {
    return (
        <React.Fragment>
            <div className={!isClicked ? "side-ham-menu" : "side-ham-menu active-side-menu"}>
                <div className="ham-body">
                    <h2><a href="#">About</a></h2>
                    <h2><a href="#">Experience</a></h2>
                    <h2><a href="#">Work</a></h2>
                    <h2><a href="#">Contact</a></h2>
                </div>
                <div className="ham-footer">
                    <ul>
                        <li><a href="#"><GoMarkGithub /></a></li>
                        <li><a href="#"><AiFillLinkedin /></a></li>
                        <li><a href="#"><AiFillTwitterCircle /></a></li>

                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideHamMenu;
