import React from 'react'
import './menu.scss'



const menu = ({menuOpen , setMenuOpen}) => {
    return (
        <div className={"menu-main "+(menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#Services">Our Services</a>
                </li>
                <li>
                    <a href="#Projects">Projects</a>
                </li>
            </ul>
        </div>
    )
}

export default menu