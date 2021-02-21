import React from 'react'
import Grid from '@material-ui/core/Grid';
import hungr from '../assets/images/hungr.jpg'
import zenyx from '../assets/images/zenyx.jpg'
import vitl from '../assets/images/vitle-media.jpg'
import { ArrowDownCircle } from 'react-feather';
import { Link } from 'react-router-dom'

const FourthSection = () => {
    return (
        <Grid container item xs={12} id="fourth-section" className="section text-align-center">
            <p id="fourth-header" style={{ position: 'absolute', top: '2.5%', left: '5%' }}>Work Journey</p>
            <Grid id="fourth-section-first-div" item container md={12} style={{ marginBottom: "5rem" }}>
                <Grid className="text-align-right" item container md={5} style={{ flexFlow: "column" }}>
                    <h2>Hungr</h2>
                    <p style={{ color: "#727272" }}>Software Engineer</p>
                    <p style={{ fontSize: "1.25rem", paddingTop: ".5rem" }}>Hungr is a startup that I worked with for about 3 months. Even though it was a short time, we worked on a bunch of assignments.
                    For a few of these assignments, I was in charge of creating frontends. For instance, we were working on the company's mobile app
                    and I was tasked with building the frontend for the consumer login and the main company website. I wasn't only working on frontends though. I also 
                    contributed to backends on other projects the company was working on. Like setting up the logic behind a user adding an item to their cart.</p>
                </Grid>
                <Grid item container md={1}/>
                <Grid item container md={6} style={{ alignItems: "center" }}><img src={hungr} alt="" style={{ width: "100%", maxHeight: "175px" }}/></Grid>
            </Grid>
            <Grid item container md={12} style={{ paddingBottom: "5rem" }}>
                <Grid item container md={6} style={{ justifyContent: "center", alignItems: "center" }}><img src={vitl} alt="" style={{ width: "100%", maxHeight: "200px", maxWidth: "200px" }}/></Grid>
                <Grid item container md={1}/>
                <Grid className="text-align-left" item container md={5} style={{ flexFlow: "column" }}>
                    <h2>Vitl Media</h2>
                    <p style={{ color: "#727272" }}>Full-Stack Software Engineer</p>
                    <p style={{ fontSize: "1.25rem", paddingTop: ".5rem" }}>I've been working with Vitl Media for about a year now and we've worked with quite a handful of clients. From lawn mowing businesses to nail salons to law offices and bloggers. We kind of work with all
                    types of businesses! We focus on a more SEO and Blogging sort of approach when working with businesses. That was mainly what the workload consisted of. Other than that, we also 
                    provided consulting, where a client wants to learn more or guidance on how to approach their online presence. Occasionally, we had the ecommerce projects
                    where a client has some type of product or service they wanted to sell. We would usually use Shopify for these projects, if not, then Woocommerce.</p>
                </Grid>
            </Grid>
            <Grid className="project-row reverse" item container md={12} style={{ marginBottom: "5rem" }}>
                <Grid className="text-align-right" item container md={5} style={{ flexFlow: "column" }}>
                    <div className="project">
                        <h2>Zenyx, LLC</h2>
                        <p style={{ color: "#727272" }}>Full-Stack Software Engineer</p>
                        <p style={{ fontSize: "1.25rem", paddingTop: ".5rem" }}>Zenyx LLC, was actually the first digital agency I worked with, after I started freelancing.
                        Just like Vitl Media, we worked with a variety of clients, but with a more of a saas approach. We helped already established businesses ease their workflow
                        by providing custom software. One of my favorite projects was collaberating with a team to build a POS/Inventory app for modern
                        yet small grocery stores.</p>
                    </div>
                </Grid>
                <Grid item container md={1}/>
                <Grid item container md={6} style={{ alignItems: "center" }}><img src={zenyx} alt="" style={{ width: "100%", maxHeight: "175px"}}/></Grid>
            </Grid>  
            <Grid item container xs={12} style={{ justifyContent: "center", padding: "2rem" }}>
                <Link to="/connect">
                        <ArrowDownCircle stroke-width="1" width="30" height="30" style={{ fontSize: "1.5rem", marginTop: ".5rem" }}/>
                        <p style={{ fontSize: "1.5rem" }}>Continue to connect!</p>
                </Link>  
            </Grid>   
        </Grid>
    )
}

export default FourthSection
