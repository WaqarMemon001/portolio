import React from 'react'
import { } from 'react-icons/bs';

import './Navbar.scss';

const Navbar = ({ menuOpen, setMenuOpen, isDesktop, setIsDesktop }) => {
    const media = '688px'


    return (
        <div className={"navbar-main " + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className='logo'>
                    <a href="#home">WAQAR <span> SHAFFI.</span></a>
                </div>

                {isDesktop ? <div className="right">
                    <div className="toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div> :
                    <div className='items'>
                        <ul>
                            <li>
                                <a href="#home" className='active' >HOME</a>

                            </li>
                            <li>
                                <a href="#about">ABOUT</a>

                            </li>
                            <li>
                                <a href="#services">SERVICES</a>
                            </li>
                            <li>
                                <a href="#projects">PROJECTS</a>

                            </li>
                        </ul>

                    </div>}






            </div>
        </div>
    )
}

export default Navbar