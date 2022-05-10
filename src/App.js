import React from 'react';

import { About, Footer, Header, Experiences, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {


  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Experiences />
      <Skills />
      <Footer />
    </div>
  );
}




export default App;