import React from 'react'
import './menu.scss'



const menu = ({menuOpen , setMenuOpen}) => {
    return (
        <div className={"menu-main "+(menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#services">Our Services</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </div>
    )
}

export default menu