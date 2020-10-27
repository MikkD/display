import React from 'react';
import './Hero.scss';

function Hero() {
    return (
        <React.Fragment>
            <div className="section hero">
                <h4>Hello, my name is </h4>
                <h2>Nick Alexeev </h2>
                <h2>I enjoy building web  </h2>
                <p>I'm a frontend engineer based in Bay Area, specializing in building exceptional websites and  applications.</p>
                <div><a className="btn" href="#">Get in touch</a></div>
            </div>
        </React.Fragment>
    )
}

export default Hero
