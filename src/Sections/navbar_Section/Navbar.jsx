import { isEditable } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { } from 'react-icons/bs';
import { FaAccusoft } from "react-icons/fa"

import './Navbar.scss';

const Navbar = ({ menuOpen, setMenuOpen, isDesktop, setIsDesktop }) => {
    const media = '688px'

    return (
        <div className={"navbar-main " + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className='logo'>
                    <a href="#">WAQAR SHAFFI.</a>
                </div>

                {isDesktop ? <div className="right">
                    <div className="toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div> :
                    <div className='items'>
                        <div className="items-subdiv">
                            <a href="#Home">HOME</a>
                            <a href="#About">ABOUT</a>
                            <a href="#Services">SERVICES</a>
                            <a href="#Projects">PROJECTS</a>
                        </div>

                    </div>}






            </div>
        </div>
    )
}

export default Navbar