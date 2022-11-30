import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

import HeroHome from '../partials/HeroHome';
import Portfolio from '../partials/Portfolio';


function Home() {
  return (

    
      <div className="flex flex-col min-h-screen overflow-hidden bg-color-100">


      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
      <HeroHome />
      <Portfolio />

        {/*  Page sections */}
      
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;