import React from 'react';
import './Hamburger.scss';
import styled from 'styled-components';


function Hamburger({ isClicked, clickHandler }) {
    const TopHum = styled.div`
margin-bottom: 0.4rem;
width: 25px;
height: 2px;
transition: "all 0.3s";
background-color: ${isClicked ? "white" : "black"};  
transform: ${isClicked ? "rotate(-45deg) translate(-5px)" : null};
`;
    const BottomHum = styled.div`
margin-bottom: 0.4rem;
width: 25px;
height: 2px;
transition: "all 0.3s";
background-color: ${isClicked ? "white" : "black"};  
transform: ${isClicked ? 'rotate(45deg) translate(-5px)' : null};

`;


    return (
        <React.Fragment>
            <div onClick={() => clickHandler(prevState => !prevState)}
                className={!isClicked ? "ham hidden-hamburger-menu" : " ham hidden-hamburger-menu active"}>
                <TopHum ></TopHum>
                <BottomHum ></BottomHum>
            </div>
        </React.Fragment>
    )
}

export default Hamburger;
