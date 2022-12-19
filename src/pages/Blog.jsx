import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import BlogList from '../partials/BlogList';



function Blog() {
return (
        <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-t from-[#1A1E23] via-[#27232A] to-transparent">

        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="flex-grow">

        {/*  Page sections */}
        <BlogList />
        
        </main>

        {/*  Site footer */}
        <Footer />

        </div>
    );
}

export default Blog;