import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Mail, Linkedin, GitHub } from 'react-feather';

const FifthSection = () => {
    return (
        <Grid container item xs={12} id="fifth-section" className="section" style={{ justifyContent: "space-around", alignItems: "center" }}>
            <p style={{ fontSize: '3.5rem', position: 'absolute', top: '2.5%', left: '5%' }}>Lets Connect!</p>
            <Grid item xs={12} md={4}>
                <Mail stroke-width=".25" width="200" height="300"/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Linkedin stroke-width=".25" width="200" height="300"/>
            </Grid>
            <Grid item xs={12} md={4}>
                <GitHub stroke-width=".25" width="200" height="300"/>
            </Grid>
        </Grid>
    )
}

export default FifthSection
