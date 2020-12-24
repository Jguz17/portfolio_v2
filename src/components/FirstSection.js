import React from 'react'
import userImage from '../assets/images/johnathan.png'
import { ArrowDownCircle } from 'react-feather';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

const FirstSection = () => {
    return (
        <div id="first-section" className="section">
            <p className="first-section-header-content" style={{ paddingBottom: "1rem" }}>Hi, I'm Johnathan.</p>
            <img src={userImage} alt=""/>
            <p className="first-section-header-content">I create things on the web.</p>   
            <Grid item container xs={12} style={{ justifyContent: "center", padding: "2rem", flexDirection: "column", alignItems: "center" }}>
                <Link to="/about-me">
                    <ArrowDownCircle stroke-width="1" width="30" height="30" style={{ fontSize: "1.5rem", marginTop: ".5rem" }}/>
                    <p style={{ fontSize: "1.5rem" }}>Find out more about me</p>
                </Link>            
            </Grid>        
        </div>
    )
}

export default FirstSection
