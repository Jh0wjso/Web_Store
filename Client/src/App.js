import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (

    <div className="MainContent h-100 d-flex flex-column">
      <div className='w-screen container'>
        <Header />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
