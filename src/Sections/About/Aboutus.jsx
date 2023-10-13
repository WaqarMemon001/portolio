import { React, useState, useEffect } from 'react';
import './Aboutus.scss'


import PortfolioList from '../../componants/portolioList/PortfolioList'

import image from '../../assets/1674716761_logo images.png'



const Aboutus = () => {

  const [selected, setSelected] = useState("web");
  const list = [
    {
      id: "web",
      title: "Web App"

    },
    {
      id: "mobile",
      title: "Mobile App"

    },
    {
      id: "Desing",
      title: "Desgin"

    },
    {
      id: "branding",
      title: "Branding"

    }


  ]


  return (
    <div className='about_main' id='about'>

      <h1>Portfolio</h1>

      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>

      
      <div className="container">
        <div className="item">
          <img src={image} alt="" width="200" height="200" />
          <h3>Clothing House</h3>
        </div>
        <div className="item">
          <img src={image} alt="" width="200" height="200" />
          <h3>Clothing House</h3>
        </div>
        <div className="item">
          <img src={image} alt="" width="200" height="200" />
          <h3>Clothing House</h3>
        </div>
        <div className="item">
          <img src={image} alt="" width="200" height="200" />
          <h3>Clothing House</h3>
        </div>
        <div className="item">
          <img src={image} alt="" width="200" height="200" />
          <h3>Clothing House</h3>
        </div>
      </div>




    </div>
  )
}

export default Aboutus