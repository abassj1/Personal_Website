import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import stock from '../images/stock.jpg';



function HeroHome() {

return (
    <section className="relative h-[480px] sm:h-auto md:h-auto lg:h-auto bg-blitblue-100">

        <div className="imgCover flex flex-col min-h-screen overflow-hidden">     
            
            <img className="stockImage w-full h-full bg-no-repeat bg-cover" src={stock} /> 

        </div>

    </section>
    
);
}

export default HeroHome;