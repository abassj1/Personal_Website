import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import logo from "../images/svg/AJ.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeLink, setActiveLink] = useState('');

  const onUpdateActiveLink = (value) => 
  {
    setActiveLink(value);
  }

  return (
    <div>
      <nav className="bg-gradient-to-b from-color-100 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-around h-16">
            <div className="flex-shrink-0">
              <Link to="/">
              <img className="flex h-6 mx-auto" src={logo} alt="Workflow" />
              </Link>
            </div>
            <div className="flex items-center mr-48">
              <div className="hidden md:block">
                <div className="ml-10 flex space-x-14 mx-auto">
                
                  <NavLink
                    to="/"
                    className={activeLink === 'home' ? 'active navbar_links' : 'navbar_links hover:text-white'} onClick={() => onUpdateActiveLink('home')}
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/posts"
                    className={activeLink === 'posts' ? 'active navbar_links' : 'navbar_links hover:text-white'} onClick={() => onUpdateActiveLink('posts')}
                  >
                    Posts
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className={activeLink === 'contact' ? 'active navbar_links' : 'navbar_links hover:text-white'} onClick={() => onUpdateActiveLink('contact')}
                  >
                    Contact Me
                  </NavLink>

                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blitblue-400 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blitblue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#0D182E"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#0D182E"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="text-center justify-center pt-8 pb-3 space-y-4 sm:px-3">
                <Link
                  to="/"
                  className="text-white hover:bg-blitblue-500 mx-auto w-1/3 hover:text-black block px-3 py-2 rounded-full text-lg font-medium"
                >
                  Home
                </Link>

                <Link
                  to="/posts"
                  className="text-white hover:bg-blitblue-500 mx-auto w-1/3 hover:text-black block px-3 py-2 rounded-full text-lg font-medium"
                >
                  Posts
                </Link>

                <Link
                  to="/contact"
                  className="text-white hover:bg-blitblue-500 mx-auto w-1/3 hover:text-black block px-3 py-2 rounded-full text-lg font-medium"
                >
                  Contact Me
                </Link>

              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;
