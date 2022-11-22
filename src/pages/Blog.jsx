import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';



function Blog() {
return (
        <div className="flex flex-col min-h-screen overflow-hidden bg-blitblue-100">

        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="flex-grow">

            {/*  Page sections */}
        
        </main>

        {/*  Site footer */}
        <Footer />

        </div>
    );
}

export default Blog;