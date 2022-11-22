import React from 'react';

import Header from '../../partials/Header';
import SoftwareDev from '../../partials/sub_partials/SoftwareDev';
import Footer from '../../partials/Footer';

function SoftwareDevPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <SoftwareDev />


      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default SoftwareDevPage;