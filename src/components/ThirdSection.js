import React from 'react'
import Grid from '@material-ui/core/Grid';
import spcc from '../assets/images/spcc-image.jpg'
import spcc2 from '../assets/images/spcc-2-admin.jpg'
import recipeme from '../assets/images/recipeme-image.jpg'
import insure from '../assets/images/insure-image.jpg'

const ThirdSection = () => {
    return (
        <Grid container item xs={12} id="third-section" className="section">
            <p style={{ fontSize: '3.5rem', position: 'absolute', top: '2.5%', left: '5%' }}>Project Catalog</p>
            <Grid item container md={12} style={{ marginBottom: "5rem" }}>
                <Grid item container md={6}><img src={spcc} alt="" style={{ width: "100%", maxHeight: "175px" }}/><img src={spcc2} alt="" style={{ width: "100%", maxHeight: "175px", marginTop: "1rem" }}/></Grid>
                <Grid item container md={1}/>
                <Grid item container md={5} style={{ flexFlow: "column", textAlign: "left" }}>
                    <h2>Superior Prostine Cleaning Company</h2>
                    <p style={{ color: "#727272" }}>Html / Css / Bootstrap / JavaScript / Node.js / Express.js</p>
                    <p style={{ fontSize: "1.25rem", paddingTop: ".5rem" }}>There are two parts to this project, a client side and an admin side. For the client side I used Html, Css, Bootstrap to handle the design
                    and layout of the project, and I used JavaScript to handle the events and api calls. The user is able to send a message and a booking request to an external API linked to the
                    admin panel of this site. I built the admin side using Node.js and Express.js, I also used JWT tokens to handle the authorization. Thr admin can confirm or delete
                    messages and bookings</p>
                    <a href="https://superiorpristinecleaningcompany.netlify.app/">Link to client</a>
                    <a href="https://superiorpristinecleaningcompany.netlify.app/admin">Link to admin</a>
                </Grid>
            </Grid>
            <Grid item container md={12} style={{ marginBottom: "5rem" }}>
                <Grid item container md={5} style={{ flexFlow: "column", textAlign: "right" }}>
                    <h2>Recipeme</h2>
                    <p style={{ color: "#727272" }}>Html / Css / Material UI / JavaScript / React / Redux / Ruby On Rails</p>
                    <p style={{ fontSize: "1.25rem", paddingTop: ".5rem" }}>For this project, I used Material UI to handle the responsiveness and used built-in components such as Card, Grid, and Buttons.
                    This project has the user sign up / sign in to use its features like searching up an ingredient to pull up a list of recipes. When a user does this, it is making an API call to an external
                    API. The user is able to add the recipes to their list, which is where Redux comes into play. As a recipe is created, it gets added to the store and updates the UI. A user is also able to delete
                    recipes from their list.</p>
                    <a href="https://recipeme.netlify.app/">Link to project</a>
                </Grid>
                <Grid item container md={1}/>
                <Grid item container md={6}><img src={recipeme} alt="" style={{ width: "100%" }}/></Grid>
            </Grid>
            <Grid item container md={12} style={{ paddingBottom: "5rem" }}>
                <Grid item container md={6}><img src={insure} alt="" style={{ width: "100%" }}/></Grid>
                <Grid item container md={1}/>
                <Grid item container md={5} style={{ flexFlow: "column", textAlign: "left" }}>
                    <h2>Recipeme</h2>
                    <p style={{ color: "#727272" }}>Vue / Composition API / Bulma</p>
                    <p style={{ fontSize: "1.25rem", paddingTop: ".5rem" }}>I did a little something different for this project. I only built a responsive frontend but no backend to interact with.
                    I chose Vue.js to break up the work by creating a component for each section of the project. I used Composition API instead of 
                    Vuex to handle state management because it seemed relatively easier to set up. The way it is being used is to store a value
                    whenever it is mobile. For some buttons and UI components, I used Bulma.</p>
                    <a href="https://insure-a-landing-page.netlify.app/">Link to project</a>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ThirdSection
