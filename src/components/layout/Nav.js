import React from 'react'
import { Home, HelpCircle, Layers, Briefcase, Share2 } from 'react-feather';

const Nav = () => {

    const desktop = <div className="desktop-nav">
        <Home stroke-width=".5" width="75" height="75"/>
        <HelpCircle stroke-width=".5" width="75" height="75"/>
        <Layers stroke-width=".5" width="75" height="75"/>
        <Briefcase stroke-width=".5" width="75" height="75"/>
        <Share2 stroke-width=".5" width="75" height="75"/>
    </div>

    const mobile = <div className="mobile-nav"><Home/></div>

    return (
        <div className="nav-container">
            {desktop}
        </div>
    )
}

export default Nav
