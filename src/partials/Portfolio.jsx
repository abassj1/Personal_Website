import React, { useState } from 'react';
import { Link } from 'react-router-dom';






function Portfolio() {

return (
    <section className="relative h-[480px] sm:h-auto md:h-auto lg:h-[1000px]">
        
        <div className="relative h-full text-center">
        
            <div className="relative font-bold right-[25%] top-24 text-[3em] text-blitblue-500">Portfolio</div>

            <div className=" relative max-w-3xl mx-auto top-[20%] h-[500px] text-center">

                <div id="stack1" class="card-container relative h-80 w-full start">
                    <div id="card1" class="card h-72 items-center p-6 bg-gradient-to-tl from-blitblue-200 via-blitblue-200 to-blitblue-300 rounded-large drop-shadow-2xl card1">
                        <h1 className="text-lg font-extrabold text-blitblue-500">Who we are</h1>

                        <p className="text-white">
                        We are a Consummate Custom Software Development company delivering
                        splendid business IT Solutions and related services to customers
                        across the globe..Our proficiency in understanding
                        business challenges and professional competence allows us to
                        createabetter experience for our customers.
                        </p>
                    </div>

                    <div id="card2" class="card h-72 items-center p-6 bg-gradient-to-bl from-blitblue-200 via-blitblue-200 to-blitblue-300 rounded-large drop-shadow-2xl card2">
                        <h1 className="text-lg font-extrabold text-blitblue-500">What we do</h1>

                        <p className="text-white">
                        We specialize in Software development for small and large businesses.
                        We have successfully served for more than 50+
                        success stories ranging from Enterprise level to Start-ups,who
                        have grown alongside the success of the company.
                        </p>
                    </div>

                    <div id="card3" class="card h-72 items-center p-6 bg-gradient-to-tr from-blitblue-200 via-blitblue-200 to-blitblue-300 rounded-large drop-shadow-2xl card3">
                        <h1 className="text-lg font-extrabold text-blitblue-500">Why we differ</h1>

                        <p className="text-white">
                        At present we are a Robust Team having diverse skills with more.
                        than 10+ years of Technology experience engaging with customers at
                        Deeper level to provide cutting edge solutions and innovations.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
    
);
}

export default Portfolio;