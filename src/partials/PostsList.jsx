import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import twitter_logo from "../images/svg/twitter_logo_original.svg";
import linkedin_logo from "../images/svg/linkedin_logo_original.svg";
import notion_logo from "../images/svg/notion_logo_original.svg";
import github_logo from "../images/svg/github_logo_original.svg";




function PostsList() {

return (
    <section className="relative h-[1700px] sm:h-auto md:h-auto lg:h-[600px]">

        <div class="container flex flex-col mx-auto max-w-[1000px] h-screen">

            <div className="mx-auto mt-16 w-full h-72 max-w-[1000px] max-h-[100px] items-center text-center">
                <div className="mx-auto lg:mx-4 font-bold text-4xl text-blitblue-500">Posts</div>

                <div class="post-container mt-8 grid md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-16">

                    <div id="post1" class="post text-center h-72 items-center p-6 rounded-large drop-shadow-2xl post1">
                        <div class="flex mx-auto mt-2 items-center w-full">                    
                            <h1 className="text-lg mx-auto font-extrabold text-blitblue-500">WhatsApp Automation</h1>
                        </div>  

                        <div class="flex mx-auto mt-3 items-center w-4/5 h-3/5">                    
                            <p className="text-white text-center">
                            We are a Consummate Custom Software Development company delivering
                            splendid. Lorem upsum Lorem Upsum dil ssupum
                            </p>
                        </div>

                        <div class="flex mx-auto items-center w-full">
                            <div className="flex mx-auto">  
                                <div className="flex w-12 h-12">
                                    <img className="flex" src={twitter_logo} /> 
                                </div>
                                <div className="flex items-center mx-auto w-full h-12">
                                    <button className="viewBtn mx-auto flex"> View
                                        <span></span>
                                    </button>  
                                </div>
                                <div className="flex w-12 h-12">
                                    <div className="flex text-white mt-3">6m</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="post1" class="post text-center h-72 items-center p-6 rounded-large drop-shadow-2xl post1">
                        <div class="flex mx-auto mt-2 items-center w-full">                    
                            <h1 className="text-lg mx-auto font-extrabold text-blitblue-500">WhatsApp Automation</h1>
                        </div>  

                        <div class="flex mx-auto mt-3 items-center w-4/5 h-3/5">                    
                            <p className="text-white text-center">
                            We are a Consummate Custom Software Development company delivering
                            splendid. Lorem upsum Lorem Upsum dil ssupum
                            </p>
                        </div>

                        <div class="flex mx-auto items-center w-full">
                            <div className="flex mx-auto">  
                                <div className="flex w-12 h-12">
                                    <img className="flex" src={linkedin_logo} /> 
                                </div>
                                <div className="flex items-center mx-auto w-full h-12">
                                    <button className="viewBtn mx-auto flex"> View
                                        <span></span>
                                    </button>  
                                </div>
                                <div className="flex w-12 h-12">
                                    <div className="flex text-white mt-3">6m</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="post1" class="post text-center h-72 items-center p-6 rounded-large drop-shadow-2xl post1">
                        <div class="flex mx-auto mt-2 items-center w-full">                    
                            <h1 className="text-lg mx-auto font-extrabold text-blitblue-500">WhatsApp Automation</h1>
                        </div>  

                        <div class="flex mx-auto mt-3 items-center w-4/5 h-3/5">                    
                            <p className="text-white text-center">
                            We are a Consummate Custom Software Development company delivering
                            splendid. Lorem upsum Lorem Upsum dil ssupum
                            </p>
                        </div>

                        <div class="flex mx-auto items-center w-full">
                            <div className="flex mx-auto">  
                                <div className="flex w-12 h-12">
                                    <img className="flex" src={github_logo} /> 
                                </div>
                                <div className="flex items-center mx-auto w-full h-12">
                                    <button className="viewBtn mx-auto flex"> View
                                        <span></span>
                                    </button>  
                                </div>
                                <div className="flex w-12 h-12">
                                    <div className="flex text-white mt-3">6m</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="post1" class="post text-center h-72 items-center p-6 rounded-large drop-shadow-2xl post1">
                        <div class="flex mx-auto mt-2 items-center w-full">                    
                            <h1 className="text-lg mx-auto font-extrabold text-blitblue-500">WhatsApp Automation</h1>
                        </div>  

                        <div class="flex mx-auto mt-3 items-center w-4/5 h-3/5">                    
                            <p className="text-white text-center">
                            We are a Consummate Custom Software Development company delivering
                            splendid. Lorem upsum Lorem Upsum dil ssupum
                            </p>
                        </div>

                        <div class="flex mx-auto items-center w-full">
                            <div className="flex mx-auto">  
                                <div className="flex w-12 h-12">
                                    <img className="flex" src={notion_logo} /> 
                                </div>
                                <div className="flex items-center mx-auto w-full h-12">
                                    <button className="viewBtn mx-auto flex"> View
                                        <span></span>
                                    </button>  
                                </div>
                                <div className="flex w-12 h-12">
                                    <div className="flex text-white mt-3">6m</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="post1" class="post text-center h-72 items-center p-6 rounded-large drop-shadow-2xl post1">
                        <div class="flex mx-auto mt-2 items-center w-full">                    
                            <h1 className="text-lg mx-auto font-extrabold text-blitblue-500">WhatsApp Automation</h1>
                        </div>  

                        <div class="flex mx-auto mt-3 items-center w-4/5 h-3/5">                    
                            <p className="text-white text-center">
                            We are a Consummate Custom Software Development company delivering
                            splendid. Lorem upsum Lorem Upsum dil ssupum
                            </p>
                        </div>

                        <div class="flex mx-auto items-center w-full">
                            <div className="flex mx-auto">  
                                <div className="flex w-12 h-12">
                                    <img className="flex" src={twitter_logo} /> 
                                </div>
                                <div className="flex items-center mx-auto w-full h-12">
                                    <button className="viewBtn mx-auto flex"> View
                                        <span></span>
                                    </button>  
                                </div>
                                <div className="flex w-12 h-12">
                                    <div className="flex text-white mt-3">6m</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="post1" class="post text-center h-72 items-center p-6 rounded-large drop-shadow-2xl post1">
                        <div class="flex mx-auto mt-2 items-center w-full">                    
                            <h1 className="text-lg mx-auto font-extrabold text-blitblue-500">WhatsApp Automation</h1>
                        </div>  

                        <div class="flex mx-auto mt-3 items-center w-4/5 h-3/5">                    
                            <p className="text-white text-center">
                            We are a Consummate Custom Software Development company delivering
                            splendid. Lorem upsum Lorem Upsum dil ssupum
                            </p>
                        </div>

                        <div class="flex mx-auto items-center w-full">
                            <div className="flex mx-auto">  
                                <div className="flex w-12 h-12">
                                    <img className="flex" src={notion_logo} /> 
                                </div>
                                <div className="flex items-center mx-auto w-full h-12">
                                    <button className="viewBtn mx-auto flex"> View
                                        <span></span>
                                    </button>  
                                </div>
                                <div className="flex w-12 h-12">
                                    <div className="flex text-white mt-3">6m</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    </section>
    
);
}

export default PostsList;