import React from 'react'
import { Home, HelpCircle, Layers, Briefcase, Share2 } from 'react-feather';
import { Link } from 'react-router-dom'


const Nav = () => {

    const desktop = <div className="desktop-nav">
        <Link to="/"><Home class="icon" stroke-width=".5" width="75" height="75"/></Link>
        <Link to="/about-me"><HelpCircle class="icon" stroke-width=".5" width="75" height="75"/></Link>
        <Link to="/project-catalog"><Layers class="icon" stroke-width=".5" width="75" height="75"/></Link>
        <Link to="/work-journey"><Briefcase class="icon" stroke-width=".5" width="75" height="75"/></Link>
        <Link to="/connect"><Share2 class="icon" stroke-width=".5" width="75" height="75"/></Link>
    </div>

    // const mobile = <div className="mobile-nav"><Home/></div>

    return (
        <div className="nav-container">
            {desktop}
        </div>
    )
}

export default Nav
