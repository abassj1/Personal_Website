import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import stock from '../images/stock.jpg';
import facebook from '../images/svg/facebook-brands.svg';
import instagram from '../images/svg/instagram-brands.svg';
import twitter from '../images/svg/twitter-brands.svg';
import linkedin from '../images/svg/linkedin-in-brands.svg';




function HeroHome() {

return (
    <section className="relative h-[480px] sm:h-auto md:h-auto lg:h-auto">
            
            <div className="sectionImage flex flex-col min-h-screen overflow-hidden"/> 

            <div class="bg-text">
                <div className="profession">Fullstack Developer</div>
                <div className="name">Abass Jammal</div>
            </div>

            {/* <!-- Masthead Avatar Image--> */}
            <div class="Profile_container absolute left-[50%] right-[50%]">
                <div class="card card0">
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

    </section>
    
);
}

export default HeroHome;