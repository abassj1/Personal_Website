import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';

import Home from './pages/Home';
import Blog from './pages/Blog';
import CSD from './pages/CSD';
import Consult from './pages/Consultation';
import Contact from './pages/Contact';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="blog" element={<Blog />} />
        <Route exact path="customsoftwaredev" element={<CSD />} />
        <Route exact path="/book" element={<Consult/>} />
        <Route exact path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;