import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaPaperclip } from 'react-icons/fa';

function SideBar() {
    return (
        <React.Fragment>
            <div className="left-side-bar">
                <ul>
                    <li><a href="#"><GoMarkGithub /></a></li>
                    <li><a href="#"><AiFillLinkedin /></a></li>
                    <li><a href="#"><AiFillTwitterCircle /></a></li>
                    <li><a href="#"><FaPaperclip /></a></li>
                    <li><div className="side-line"></div></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default SideBar
