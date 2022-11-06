import React from "react";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Female from "./components/Female";
import Male from "./components/Male";
import Beauty from "./components/Beauty";
import About from "./components/About";
import Shoes from "./components/Shoes";

function App() {
  return (
    <div
      className="MainContent d-flex flex-column"
      style={{ backgroundColor: "#3C3939" }}
    >
      <a href="#feminino" className="skipContent">Ir para os produtos principais</a>
      <section className="home_Content" id="home">
        <Header />
        <Home />
      </section>
      <div className="products" id="feminino">
        <Female />
      </div>
      <div className="productsSecond" id="Sapatos">
        <Shoes />
      </div>
      <div className="products" id="man">
        <Male />
      </div>
      <div className="productsSecond" id="beauty">
        <Beauty />
      </div>
      <div className="products" id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
