import React from 'react'
import { Home, HelpCircle, Layers, Briefcase, Share2 } from 'react-feather';

const Nav = () => {

    const desktop = <div className="desktop-nav">
        <Home class="icon" stroke-width=".5" width="75" height="75"/>
        <HelpCircle class="icon" stroke-width=".5" width="75" height="75"/>
        <Layers class="icon" stroke-width=".5" width="75" height="75"/>
        <Briefcase class="icon" stroke-width=".5" width="75" height="75"/>
        <Share2 class="icon" stroke-width=".5" width="75" height="75"/>
    </div>

    // const mobile = <div className="mobile-nav"><Home/></div>

    return (
        <div className="nav-container">
            {desktop}
        </div>
    )
}

export default Nav
