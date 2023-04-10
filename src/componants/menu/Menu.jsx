import React from 'react'
import './menu.scss'



const menu = ({menuOpen , setMenuOpen}) => {
    return (
        <div className={"menu-main "+(menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#home" onClick={() => setMenuOpen(!menuOpen)}>Home</a>
                </li>
                <li>
                    <a href="#about" onClick={() => setMenuOpen(!menuOpen)}>About</a>
                </li>
                <li>
                    <a href="#services" onClick={() => setMenuOpen(!menuOpen)}>Our Services</a>
                </li>
                <li>
                    <a href="#projects" onClick={() => setMenuOpen(!menuOpen)}>Projects</a>
                </li>
            </ul>
        </div>
    )
}

export default menu