import React from 'react'
import Grid from '@material-ui/core/Grid';
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import FifthSection from './components/FifthSection'
import Arrow from './components/layout/Arrow'
import Nav from './components/layout/Nav'
import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <Grid container>
      <Grid item md={2}/>
      <Grid container item md={8}>
        <Grid container item xs={12} id="section-container">
            <Switch>
              <Route path='/about-me' component={SecondSection}/>
              <Route path='/project-catalog' component={ThirdSection}/>
              <Route path='/work-journey' component={FourthSection}/>
              <Route path='/connect' component={FifthSection}/>
              <Route path='/' component={FirstSection}/>
            </Switch>
          {/* <Arrow /> */}
          <Nav/>
        </Grid>
      </Grid>
      <Grid item md={2}/>
    </Grid>
  )
}

export default App
