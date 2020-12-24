import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Mail, Linkedin, GitHub } from 'react-feather';

const FifthSection = () => {
    return (
        <Grid container item xs={12} id="fifth-section" className="section" style={{ justifyContent: "space-around", alignItems: "center" }}>
            <p style={{ fontSize: '3.5rem', position: 'absolute', top: '2.5%', left: '5%' }}>Lets Connect!</p>
            <Grid item xs={12} md={4}>
                <a href="mailto:johnathanguzman17@gmail.com" rel="noreferrer"><Mail stroke-width=".25" width="200" height="300"/></a>
            </Grid>
            <Grid item xs={12} md={4}>
                <a target="_blank" href="https://www.linkedin.com/in/johnathan-guzman/" rel="noreferrer"><Linkedin stroke-width=".25" width="200" height="300"/></a>
            </Grid>
            <Grid item xs={12} md={4}>
                <a target="_blank" href="https://github.com/jguz17" rel="noreferrer"><GitHub stroke-width=".25" width="200" height="300"/></a>
            </Grid>
        </Grid>
    )
}

export default FifthSection
