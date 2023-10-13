import React from 'react';

import './porfolioList.scss';

function PorfolioList({title ,active ,setSelected ,id}) {
    return (
        <li className={active ? "portfolioList active" : "portfolioList"}
        onClick={()=>setSelected(id)}
        >
            {title}
        </li>

    )
}

export default PorfolioList;