import React from 'react';

import { Footer, Blog, Possibility, Features, Header, What } from './Containers';
import { CTA, Brand, Navbar } from './Components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
