import React from 'react'
import { Home, HelpCircle, Layers, Briefcase, Share2, PlusCircle, MinusCircle } from 'react-feather';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

const MobileNav = () => {

    if (window.screen.width >= 769) {
        return null
    }

    const handlePlusClick = () => {
        // document.querySelector('#overlay').style.display = "block"
        document.querySelector('#minus-circle').style.display = "block"
        document.querySelector('#plus-circle').style.display = "none"
        document.querySelector('.mobile-icons-container').style.display = "flex"
        document.querySelector('.mobile-container').style.right = "0"
        document.querySelector('.mobile-container').style.bottom = "0"
        document.querySelector('.mobile-container').style.top = "0"
        document.querySelector('.mobile-container').style.width = "100%"
        document.querySelector('.mobile-container').style.display = "flex"
        document.querySelector('.mobile-container').style.justifyContent = "center"
        document.querySelector('.mobile-container').style.alignItems = "center"
        document.querySelector('.mobile-container').style.background = "rgba(229, 229, 229, .75)"
        document.getElementsByTagName("BODY")[0].style.overflowY = "hidden"
    }

    const handleMinusClick = () => {
        // document.querySelector('#overlay').style.display = "none"
        document.querySelector('#minus-circle').style.display = "none"
        document.querySelector('#plus-circle').style.display = "block"
        document.querySelector('.mobile-icons-container').style.display = "none"
        document.querySelector('.mobile-container').style.right = "2.5%"
        document.querySelector('.mobile-container').style.bottom = "2.5%"
        document.querySelector('.mobile-container').style.top = ""
        document.querySelector('.mobile-container').style.width = ""
        document.querySelector('.mobile-container').style.display = "block"
        document.querySelector('.mobile-container').style.justifyContent = ""
        document.querySelector('.mobile-container').style.alignItems = ""
        document.querySelector('.mobile-container').style.background = ""
        document.getElementsByTagName("BODY")[0].style.overflowY = ""
    }
    
    return (
        <div className="mobile-container">
            <div className="mobile-nav">
                <PlusCircle id="plus-circle" class="icon" stroke-width=".5" width="75" height="75" onClick={handlePlusClick}/>
                <div className="mobile-icons-container">
                    <Link className="mobile-icon" to="/"><Home class="icon" stroke-width=".5" width="85" height="85"/></Link>
                    <Link className="mobile-icon" to="/about-me"><HelpCircle class="icon" stroke-width=".5" width="85" height="85"/></Link>
                    <Link className="mobile-icon" to="/project-catalog"><Layers class="icon" stroke-width=".5" width="85" height="85"/></Link>
                    <Link className="mobile-icon" to="/work-journey"><Briefcase class="icon" stroke-width=".5" width="85" height="85"/></Link>
                    <Link className="mobile-icon" to="/connect"><Share2 class="icon" stroke-width=".5" width="85" height="85"/></Link>
                </div>
                <MinusCircle id="minus-circle" class="icon" stroke-width=".5" width="85" height="85" onClick={handleMinusClick}/>
            </div>
        </div>
    )
}

export default MobileNav
