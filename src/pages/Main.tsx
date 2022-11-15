import React from "react";
import "./main.css";

import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Footer from "../components/Footer/Footer";
import Female from "../components/Female/Female";
import Male from "../components/Male/Male";
import Beauty from "../components/Beauty/Beauty";
import About from "../components/About/About";
import Shoes from "../components/Shoes/Shoes";
import Social from "../components/Social/Social";

export default function Main() {
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
      <div className="productsSecond" id="shoes">
        <Shoes />
      </div>
      <div className="products" id="man">
        <Male />
      </div>
      <div className="productsSecond" id="beauty">
        <Social />
      </div>
      <div className="products" id="beauty">
        <Beauty />
      </div>
      <div className="productsSecond" id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
}
