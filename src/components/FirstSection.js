import React from 'react'
import userImage from '../assets/images/johnathan.png'

const FirstSection = () => {
    return (
        <div id="first-section" className="section">
            <p className="first-section-header-content" style={{ paddingBottom: "1rem" }}>Hi, I'm Johnathan.</p>
            <img src={userImage} alt=""/>
            <p className="first-section-header-content">I create things on the web.</p>   
        </div>
    )
}

export default FirstSection
