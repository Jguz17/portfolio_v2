import React from 'react'
import TreeImage from '../assets/images/tree.jpg'
import { ArrowDownCircle } from 'react-feather';
import { Link } from 'react-router-dom'

const SecondSection = () => {
    return (
        <div id="second-section" className="section">
            <p style={{ fontSize: '3.5rem', position: 'absolute', top: '2.5%', left: '5%' }}>A little about me</p>
            <div className="second-section-content" style={{ marginTop: '1rem' }}>
                <img id="tree-image" src={TreeImage} alt=""/>
                <div id="skills-container">
                    <p style={{ fontSize: '1.5rem', alignSelf: 'center' }}>Hi! This is me(before I dyed my hair), with a random tree I found at my nearby conservatory. I'm an ambitious dev with a thirst for knowledge, and I like finding new ways to solve simple/complex problems. I have a little over 3 years of experience working as a Software Engineer. I am familiar with the following tech:</p>
                    <div className="tech-skills" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem'  }}>
                        <div className="frontend-skills-list">
                            <h3>Frontend</h3>
                            <ul>
                                <li>Html / Css / JavaScript</li>
                                <li>Vue / Vuex / Composition API</li>
                                <li>React / Redux / Context API</li>
                                <li>Bootstrap / Bulma / Material UI </li>
                            </ul>
                        </div>
                        <div className="backend-skills-list">
                            <h3>Backend</h3>
                            <ul>
                                <li>Ruby / Ruby On Rails</li>
                                <li>Node.js / Express</li>
                                <li>Php / WordPress</li>
                                <li>MongoDB / PostgreSQL</li>
                                <li>Python</li>
                            </ul>
                        </div>
                        <div className="general-skills-list">
                            <h3>General</h3>
                            <ul>
                                <li>Adobe Illustrator</li>
                                <li>Figma</li>
                                <li>REST</li>
                                <li>Git / GitHub</li>
                            </ul>
                        </div>
                    </div>
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
