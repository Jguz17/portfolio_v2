import React from 'react'
import TreeImage from '../assets/images/tree.jpg'
import { ArrowDownCircle } from 'react-feather';
import { Link } from 'react-router-dom'

const SecondSection = () => {
    return (
        <div id="second-section" className="section text-align-center">
            <p id="second-header" style={{ position: 'absolute', top: '2.5%', left: '5%' }}>A little about me</p>
            <div className="second-section-content" style={{ marginTop: '1rem' }}>
                <img id="tree-image" src={TreeImage} alt=""/>
                <div id="skills-container">
                    <p style={{ fontSize: '1.5rem', alignSelf: 'center' }}>Hi! This is me(before I dyed my hair), with a random tree I found at my nearby conservatory. I'm an ambitious dev with a thirst for knowledge, and I like finding new ways to solve simple/complex problems. I have a little over 3 years of experience working as a Software Engineer and I like to make cool things on the web :)</p>
                </div>
            </div>
            <Link to="/project-catalog">
                    <ArrowDownCircle stroke-width="1" width="30" height="30" style={{ fontSize: "1.5rem", marginTop: ".5rem" }}/>
                    <p style={{ fontSize: "1.5rem" }}>Continue to projects</p>
            </Link>   
        </div>
    )
}

export default SecondSection
