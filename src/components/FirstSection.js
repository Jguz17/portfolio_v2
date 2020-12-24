import React from 'react'
import userImage from '../assets/images/johnathan.png'
import Arrow from './layout/Arrow'
import Grid from '@material-ui/core/Grid';

const FirstSection = () => {
    return (
        <div id="first-section" className="section">
            <p className="first-section-header-content" style={{ paddingBottom: "1rem" }}>Hi, I'm Johnathan.</p>
            <img src={userImage} alt=""/>
            <p className="first-section-header-content">I create things on the web.</p>   
            <Grid item container xs={12} style={{ justifyContent: "center", padding: "2rem" }}>
                <Arrow/>
            </Grid>        
        </div>
    )
}

export default FirstSection
