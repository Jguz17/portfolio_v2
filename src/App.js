import React from 'react'
import Grid from '@material-ui/core/Grid';
import FirstSection from './components/FirstSection'

const App = () => {
  return (
    <Grid container>
      <Grid item md={2}/>
      <Grid container item md={8}>
        <Grid container item xs={12} id="first-section-container">
          <FirstSection/>
        </Grid>
      </Grid>
      <Grid item md={2}/>
    </Grid>
  )
}

export default App
