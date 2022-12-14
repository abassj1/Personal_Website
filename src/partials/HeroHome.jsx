import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import facebook from '../images/svg/facebook-brands.svg';
import instagram from '../images/svg/instagram-brands.svg';
import twitter from '../images/svg/twitter-brands.svg';
import linkedin from '../images/svg/linkedin-in-brands.svg';





function HeroHome() {

return (
    <section className="relative h-auto sm:h-auto md:h-auto lg:h-auto ">

            <div class="container mx-auto max-w-[1000px] py-28">
                <div className="flex flex-col max-w-[1000px] lg:flex-row items-center text-center">

                    {/* <!-- Masthead Avatar Image--> */}
                    <div class="Profile_container relative overflow-hidden">
                        <div class="pcard pcard0">
                            <div class="profile_border">
                                <h2 class="hover_name">Abass Jammal</h2>
                                <div class="icons_facebook">
                                    <a href="https://www.facebook.com/abassjammal01">
                                    <img
                                        class="indiv_icon"
                                        src={facebook}
                                        aria-label="Facebook">
                                    </img>
                                    </a>
                                </div>
                                <div class="icons_instagram">
                                    <a href="https://www.instagram.com/abass_j1/">
                                    <img
                                        class="indiv_icon"
                                        src={instagram}
                                        aria-label="Instagram">
                                    </img>
                                    </a>
                                </div>
                                <div class="icons_twitter">
                                    <a href="https://twitter.com/abass_j1">
                                    <img
                                        class="indiv_icon"
                                        src={twitter}
                                        aria-label="Twitter">
                                    </img>
                                    </a>
                                </div>
                                <div class="icons_linkedin">
                                    <a href="https://www.linkedin.com/in/abass-jammal-305a24165/">
                                    <img
                                        class="indiv_icon"
                                        src={linkedin}
                                        aria-label="LinkedIn">
                                    </img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div class="mt-4 mr-4 items-center w-96">
                        <h1 class="text-3xl lg:text-4xl lg:mr-6 text-white leading-tight font-bold tracking-tight">Abass Jammal</h1>
                        <h2 class="text-[#ffef16] mt-2 lg:mr-16 font-light text-3xl">Fullstack Engineer</h2>
                        <button className="contactBtn mt-4 mx-auto lg:mr-40 leading-tight tracking-tight"> Contact me
                            <span></span>
                        </button>                        
                    </div>
                </div>
            </div>

    </section>
    
);
}

export default HeroHome;