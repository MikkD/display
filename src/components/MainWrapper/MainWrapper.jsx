
import React from 'react';
import './MainWrapper.scss';
import Header from '../Header/Header';
import Hero from '../MainWrapper/Hero/Hero';
import AboutMe from '../MainWrapper/AboutMe/AboutMe';
import WorkExp from '../MainWrapper/WorkExp/WorkExp';
import Projects from '../MainWrapper/Projects/Projects';
import { GoMarkGithub } from 'react-icons/go';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FaPaperclip } from 'react-icons/fa';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import runImg from '../../assets/img/run.png';

// import AppBar from '@material-ui/core/AppBar';
// import ToolBar from '@material-ui/core/ToolBar';
// import Link from '@material-ui/core/Link';
// import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';





const MainWrapper = () => {

    return (
        <React.Fragment>
            <Header />
            <div className="main">
                <div className="left-side-bar">
                    <ul>
                        <li><a href="#"><GoMarkGithub /></a></li>
                        <li><a href="#"><AiFillLinkedin /></a></li>
                        <li><a href="#"><AiFillTwitterCircle /></a></li>
                        <li><a href="#"><FaPaperclip /></a></li>
                        <li><div className="side-line"></div></li>
                    </ul>
                </div>
                <Hero />
                <AboutMe />
                <WorkExp />
                {/* <Projects /> */}

                <div className="section projects">
                    <div className="title-heading ">
                        <h4>Projects</h4>
                        <div className="title-heading-line"></div>
                    </div>
                    <div className="projects-wrapper">
                        <div className="project-img">
                            <a href="#"><img src={runImg}></img></a>
                        </div>
                        <div className="project-info">
                            <h3 className="project-heading">Mulholland Drive</h3>
                            <div className="project-description">
                                <p>A nicer look at your GitHub profile and repository stats with data visualizations of your top
                                    languages and stars. Sort through your top repos by number of stars, forks, and size.</p>
                            </div>
                            <div className="project-stack">
                                <ul>
                                    <li>Redux</li>
                                    <li>Next.js</li>
                                    <li>Firebase</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <ul>
                                    <li><AiFillGithub /></li>
                                    <li><BsBoxArrowInUpRight /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </React.Fragment >
    )
}

export default MainWrapper;

