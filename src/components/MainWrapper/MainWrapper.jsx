
import React from 'react';
import './MainWrapper.scss';
import Header from '../Header/Header';
import Hero from '../MainWrapper/Hero/Hero';
import AboutMe from '../MainWrapper/AboutMe/AboutMe';
import WorkExp from '../MainWrapper/WorkExp/WorkExp';
import Projects from '../MainWrapper/Projects/Projects';
import SideBar from '../SideBar/SideBar';
import SideHamMenu from '../SideHamMenu/SideHamMenu';
import { AiFillGithub } from 'react-icons/ai';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import runImg from '../../assets/img/run.png';



const MainWrapper = () => {
    const [isClicked, setIsClicked] = React.useState(false);

    return (
        <React.Fragment>
            <Header isClicked={isClicked} setIsClicked={setIsClicked} />
            <div className="main">
                <SideHamMenu isClicked={isClicked} />
                <SideBar />
                <Hero />
                <AboutMe />
                <WorkExp />

                <div className="section projects">

                    <div className="title-heading ">
                        <h4>Projects</h4>
                        <div className="title-heading-line"></div>
                    </div>

                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src={runImg}></img></a>
                        </div>
                        <div className="project-info">
                            <h4 className="project-heading">Mulholland Drive</h4>
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
                                    <li><a href="#"><AiFillGithub /></a></li>
                                    <li><a href="#"><BsBoxArrowInUpRight /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src={runImg}></img></a>
                        </div>
                        <div className="project-info">
                            <h4 className="project-heading">Mulholland Drive</h4>
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
                                    <li><a href="#"><AiFillGithub /></a></li>
                                    <li><a href="#"><BsBoxArrowInUpRight /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src={runImg}></img></a>
                        </div>
                        <div className="project-info">
                            <h4 className="project-heading">Mulholland Drive</h4>
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
                                    <li><a href="#"><AiFillGithub /></a></li>
                                    <li><a href="#"><BsBoxArrowInUpRight /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src={runImg}></img></a>
                        </div>
                        <div className="project-info">
                            <h4 className="project-heading">Mulholland Drive</h4>
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
                                    <li><a href="#"><AiFillGithub /></a></li>
                                    <li><a href="#"><BsBoxArrowInUpRight /></a></li>
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

