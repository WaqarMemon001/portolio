import React, { useEffect, useRef } from 'react'
import './Intro_section.scss'
import { init } from 'ityped'



import image from '../../assets/waqar-removebg-preview.png'



const Intro_Section = () => {
    const textRef = useRef()
    
    useEffect(() => {

        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed : 60,
            strings: ['designer!','Developer!']
        });


    }, [])
    return (
        <div className='intro_main' id='home'>


            <div className="left">
                <div className="imgContainer">
                    <img src={image} alt="image..." />
                </div>

            </div>
            <div className="right">
                <div className="rightmain">
                    <h2>Hi There, I'm</h2>
                    <h1>Waqar Shaffi</h1>
                    <h3>Freelance  <span ref={textRef}></span>  </h3>
                </div>

            </div>









        </div>
    )
}

export default Intro_Section