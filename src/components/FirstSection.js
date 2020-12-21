import React from 'react'
import userImage from '../assets/images/johnathan.png'
import { ArrowDownCircle } from 'react-feather';

const FirstSection = () => {
    return (
        <div id="first-section">
            <p className="first-section-header-content">Hi, I'm Johnathan.</p>
            <img src={userImage} alt=""/>
            <p className="first-section-header-content">I create things on the web.</p>
            <div id="first-section-continue">
                <p style={{ fontSize: "1.5rem" }}>Find out more about me</p>
                <ArrowDownCircle stroke-width="1" width="30" height="30" style={{ fontSize: "1.5rem", marginTop: ".5rem" }}/>
            </div>
        </div>
    )
}

export default FirstSection
