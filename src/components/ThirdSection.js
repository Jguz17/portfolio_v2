import React from 'react'
import Grid from '@material-ui/core/Grid';
import spcc from '../assets/images/spcc-image.jpg'
import spcc2 from '../assets/images/spcc-2-admin.jpg'
import recipeme from '../assets/images/recipeme-image.jpg'
import insure from '../assets/images/natours-desktop.png'
import google from '../assets/images/google-leads-desktop.jpg'
import { ArrowDownCircle } from 'react-feather';
import { Link } from 'react-router-dom'


const ThirdSection = () => {
    return (
        <Grid container item xs={12} id="third-section" className="section text-align-center">
            <p id="third-header" style={{ position: 'absolute', top: '2.5%', left: '5%' }}>Project Journey</p>
            <Grid className="project-row reverse" item container md={12} style={{ marginBottom: "5rem" }}>
                <Grid className="text-align-right" item container md={5}>
                    <div className="project">
                        <h2>Recipeme</h2>
                        <p style={{ color: "#727272" }}>Html / Css / Material UI / JavaScript / React / Redux / Ruby On Rails</p>
                        <p style={{ fontSize: "1.25rem", paddingTop: ".5rem" }}>I built this project shortly after graduating bootcamp.
                        I wanted to make a simple website where a user is able to search up and save recipes by ingredients or just the name of the dish. There is also a feature where you can delete your own recipes. I am planning
                        to add a feature where the user is able to create their own recipe.</p>
                        <a style={{ paddingRight: ".75rem" }} href="https://recipeme.netlify.app/"><b>Link to project</b></a>
                        <a style={{ paddingRight: ".75rem" }} href="https://github.com/jguz17/recipeme-frontend"><b>Link to frontend repo</b></a>
                        <a href="https://github.com/Jguz17/Recipeme-api"><b>Link to backend repo</b></a>
                    </div>
                </Grid>
                <Grid item container md={1}/>
                <Grid item container md={6}><img src={recipeme} alt="" style={{ width: "100%" }}/></Grid>
            </Grid>
            <Grid item container md={12} style={{ marginBottom: "5rem" }}>
                <Grid item container md={6}><img src={spcc} alt="" style={{ width: "100%", maxHeight: "175px" }}/><img src={spcc2} alt="" style={{ width: "100%", maxHeight: "175px", marginTop: "1rem" }}/></Grid>
                <Grid item container md={1}/>
                <Grid className="text-align-left" item container md={5} style={{ flexFlow: "column" }}>
                    <div className="project">
                        <h2>Superior Prostine Cleaning Company</h2>
                        <p style={{ color: "#727272" }}>Html / Css / Bootstrap / JavaScript / Node.js / Express.js</p>
                        <p style={{ fontSize: "1.25rem", paddingTop: ".5rem" }}>This project consists of two frontends: one for regular users and another for the admin. I created
                        this project for a cleaning business that was interested to establish an online presence and also needed a better way to manage their bookings. Both admin and regular sites have nice animations. Visitors of the regular website are able to view information about SPCC, as well as schedule a booking and send a message! 
                        The admin is also able to view messages and booking request, confirm bookings and delete them.</p>
                        <a style={{ paddingRight: ".75rem" }} href="https://superiorpristinecleaningcompany.netlify.app/"><b>Link to project</b></a> 
                        <a style={{ paddingRight: ".75rem" }} href="https://superiorpristinecleaningcompany.netlify.app/admin"><b>Link to admin</b></a> 
                        <a style={{ paddingRight: ".75rem" }} href="https://github.com/Jguz17/spcc-backend"><b>Link to backend repo</b></a> 
                        <a style={{ paddingRight: ".75rem" }} href="https://github.com/Jguz17/spcc-frontend"><b>Link to frontend repo</b></a>

                    </div>
                </Grid>
            </Grid>
            <Grid item container md={12} style={{ marginBottom: "5rem" }}>
                <Grid className="text-align-right" item container md={5} style={{ flexFlow: "column" }}>
                    <div className="project">
                        <h2>Google Leads</h2>
                        <p style={{ color: "#727272" }}>React / Context API / Material UI / Google Places API</p>
                        <p style={{ fontSize: "1.25rem", paddingTop: ".5rem" }}>I actually built this project to help me better find local businesses that might need a website. So, I did just that, haha.
                        A user is able to plug in a desired address and choose from a variety of types of small businesses and in return will receive
                        a list of businesses within a 1 mile radius. HOWEVER. I use something called Google Places API, where google provides us with 
                        these businesses information. Super awesome, but the downside is there is a limit to how many times a user
                        can request the business information. So if it doesn't work right away, wait a few seconds or try again in about 30 minutes (that's usually how long it will take for it to go back to normal).</p>
                        <a style={{ paddingRight: ".75rem" }} href="https://google-leads.netlify.app/"><b>Link to project</b></a>
                        <a style={{ paddingRight: ".75rem" }} href="https://github.com/Jguz17/google-leads-frontend"><b>Link to frontend repo</b></a>
                        <a href="https://github.com/Jguz17/google-leads-backend/"><b>Link to backend repo</b></a>
                    </div>
                </Grid>
                <Grid item container md={1}/>
                <Grid item container md={6}><img src={google} alt="" style={{ width: "100%" }}/></Grid>
            </Grid>
            <Grid className="reverse" item container md={12}>
                <Grid item container md={6}><img src={insure} alt="" style={{ width: "100%" }}/></Grid>
                <Grid item container md={1}/>
                <Grid className="text-align-left" item container md={5} style={{ flexFlow: "column" }}>
                    <div className="project">
                        <h2>Natours</h2>
                        <p style={{ color: "#727272" }}>Html / Css / Scss</p>
                        <p style={{ fontSize: "1.25rem", paddingTop: ".5rem" }}>For this project I chose to build the frontend for a tour guide aimed at wilderness enthusiasts. I used some really cool animation effects to make it more appealing to the user. That was pretty much the intention behind this project. Other than cool visuals, this website doesn't really have much functionality.</p>
                        <a style={{ paddingRight: ".75rem" }} href="https://natour-wilderness.netlify.app/"><b>Link to project</b></a>
                        <a href="https://github.com/Jguz17/natours"><b>Link to frontend repo</b></a>
                    </div>
                </Grid>
            </Grid>
           
            <Grid item container xs={12} style={{ justifyContent: "center", padding: "2rem" }}>
                <Link to="/work-journey">
                        <ArrowDownCircle stroke-width="1" width="30" height="30" style={{ fontSize: "1.5rem", marginTop: ".5rem" }}/>
                        <p style={{ fontSize: "1.5rem" }}>Continue to work journey</p>
                </Link>  
            </Grid>
        </Grid>
    )
}

export default ThirdSection
