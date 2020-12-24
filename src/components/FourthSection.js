import React from 'react'
import Grid from '@material-ui/core/Grid';
import hungr from '../assets/images/hungr.jpg'
import zenyx from '../assets/images/zenyx.jpg'
import vitl from '../assets/images/vitle-media.jpg'
import Arrow from './layout/Arrow'

const FourthSection = () => {
    return (
        <Grid container item xs={12} id="fourth-section" className="section">
            <p style={{ fontSize: '3.5rem', position: 'absolute', top: '2.5%', left: '5%' }}>Work Journey</p>
            <Grid item container md={12} style={{ marginBottom: "5rem" }}>
                <Grid item container md={6} style={{ alignItems: "center" }}><img src={hungr} alt="" style={{ width: "100%", maxHeight: "175px" }}/></Grid>
                <Grid item container md={1}/>
                <Grid item container md={5} style={{ flexFlow: "column", textAlign: "left" }}>
                    <h2>Hungr</h2>
                    <p style={{ color: "#727272" }}>Frontend Developer</p>
                    <p style={{ fontSize: "1.25rem", paddingTop: ".5rem" }}>Developed an understanding of React.js and its core principles including State & Props and React Lifecycle.
                    Used Sass to style elements for compatibility and adherence to client style and design.
                    Interacting with Development and Client Services teams to collaborate on solution quality and functionality.
                    ability to work with remote APIs and third-party web services, loading data asynchronously, understanding state management, using JavaScript templates and dynamic views.</p>
                </Grid>
            </Grid>
            <Grid item container md={12} style={{ marginBottom: "5rem" }}>
                <Grid item container md={5} style={{ flexFlow: "column", textAlign: "right" }}>
                    <h2>Zenyx, LLC</h2>
                    <p style={{ color: "#727272" }}>Frontend Engineer</p>
                    <p style={{ fontSize: "1.25rem", paddingTop: ".5rem" }}>Wrote clean, well designed, and scalable code. Responsible for creating and maintaining a suite of cutting edge back-of-house web applications, point-of-sale APIs, 
                    and Android client applications in a fast-paced results-oriented environment. Complex API interactions from single page application frontend. Streamled Front End build pipelines. Built front ends in Typescript.
                    Built and maintained code in JavaScript and Node.js.</p>
                </Grid>
                <Grid item container md={1}/>
                <Grid item container md={6} style={{ alignItems: "center" }}><img src={zenyx} alt="" style={{ width: "100%", maxHeight: "175px"}}/></Grid>
            </Grid>
            <Grid item container md={12} style={{ paddingBottom: "5rem" }}>
                <Grid item container md={6} style={{ justifyContent: "center", alignItems: "center" }}><img src={vitl} alt="" style={{ width: "100%", maxHeight: "200px", maxWidth: "200px" }}/></Grid>
                <Grid item container md={1}/>
                <Grid item container md={5} style={{ flexFlow: "column", textAlign: "left" }}>
                    <h2>Vitl Media</h2>
                    <p style={{ color: "#727272" }}>Frontend Software Engineer</p>
                    <p style={{ fontSize: "1.25rem", paddingTop: ".5rem" }}>Deep understanding of object-oriented programming, function writing, APIs, etc. to articulate back-end requirements.
                    Experience creating component-based architecture for reusability, uniformity, and efficiency.
                    Collaborating with business and technology teams on developing front-end applications that enable the firm to work smarter and faster, while broadening the impact on how the trading teams leverage and visualize data.
                    Participating in brainstorming sessions and have the chance to contribute innovative and original ideas to the technology platform in a highly collaborative, team-oriented environment.
                    Providing guidance around front-end best practices and documentation while researching and exploring new frameworks/libraries the teams can be leveraging.</p>
                </Grid>
            </Grid>
            <Grid item container xs={12} style={{ justifyContent: "center", padding: "2rem" }}>
                <Arrow/>
            </Grid>   
        </Grid>
    )
}

export default FourthSection
