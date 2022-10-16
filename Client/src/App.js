import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Feminino from './components/Feminino';

function App() {
  return (
    <div className="MainContent h-100 d-flex flex-column"
      style={{backgroundColor: "#3C3939"}}
    >
      <section className='home_Content' id='home'>
        <Header />
        <Home />
      </section>
      <div className="products" id='feminino'>
        <Feminino />
      </div>
      <Footer />  
    </div>
  );
}

export default App;
