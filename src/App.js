import React from 'react'
import Grid from '@material-ui/core/Grid';
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import FifthSection from './components/FifthSection'
import DesktopNav from './components/layout/DesktopNav'
import MobileNav from './components/layout/MobileNav'
import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Navstate from './context/nav/NavState'

const App = () => {
  return (
    <Navstate>
      <Grid container>
        <Grid item xs={1} md={2}/>
          <Grid container item xs={10} md={8}>
            <Grid container item xs={12} id="section-container">
                <Switch>
                  <Route path='/about-me' component={SecondSection}/>
                  <Route path='/project-catalog' component={ThirdSection}/>
                  <Route path='/work-journey' component={FourthSection}/>
                  <Route path='/connect' component={FifthSection}/>
                  <Route path='/' component={FirstSection}/>
                </Switch>
                {/* <div id="overlay"></div> */}
              <DesktopNav/>
              <MobileNav/>
            </Grid>
          </Grid>
        <Grid item xs={1} md={2}/>
      </Grid>
    </Navstate>
  )
}

export default App
