import React from "react";
import MyCarousel from "../Carousel";
import "./styles.css";

import storeModel from "../../assets/Home/loja_exemplo.jpg";

export default function Home() {
  return (
    <section className="homeContent mt-5 p-4 container rounded">
        <MyCarousel />
      <div className="container">
        <div className="maincontent text-justify pt-3 container d-flex flex-row align-items-center justify-content-between">
          <div className="textStore">
            <h3>Quem somos nos</h3>
            <p>Prazer sou ..... aqui voce conhecera melhor sobre nossa loja e nossos produtos</p>
          </div>
          <img src={storeModel} className="imgStore" width={350} height={350} />
        </div>
      </div>
    </section>
  );
}
