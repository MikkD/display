import React from 'react';
import './AboutMe.scss';
import myImage from '../../../assets/img/snap.png';
import { SiRedux } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiReact } from 'react-icons/si';

function AboutMe() {
    return (
        <React.Fragment>
            <div className="section about-me">
                <div className="title-heading about-me">
                    <h4>About Me</h4>
                    <div className="title-heading-line"></div>
                </div>
                <div className="body-about-me">
                    <div className="about-me-left-block">
                        <p>Hello! I'm Nick, a frontend engineer based in Bay Area, CA.</p>
                        <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that makes you learn new technology.</p>
                        <p>Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis</p>
                        <div>
                            <p>Here are a few technologies I've been working with recently:</p>
                            <ul>
                                <li><SiJavascript /></li>
                                <li><SiReact /></li>
                                <li><SiRedux /></li>
                                <li><SiHtml5 /></li>
                                <li><SiCss3 /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-me-right-block">
                        <img src={myImage}></img>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AboutMe
