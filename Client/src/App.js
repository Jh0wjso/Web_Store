import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="MainContent h-100 d-flex flex-column"
      style={{backgroundColor: "#3C3939"}}
    >
      <div className='w-screen'>
        <Header />
      </div>
      <div>
        <Home />
      </div>
      <Footer />  
    </div>
  );
}

export default App;
