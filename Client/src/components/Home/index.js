import React from "react";
import "./styles.css";

import { MDBIcon } from "mdb-react-ui-kit";

/*
<div className="container mb-3">
        <div className="maincontent text-justify pt-3 container d-flex flex-row align-items-center justify-content-between">
          <div className="textStore">
            <h3>Quem somos nos</h3>
            <p>Prazer sou ..... aqui voce conhecera melhor sobre nossa loja e nossos produtos</p>
          </div>
          <img src={storeModel} className="imgStore" width={350} height={350} />
        </div>
      </div>

      <MyCarousel />

      <div className="emailSender container">
          <span>Deixe seu email</span>
          <div>
            <input placeholder="email@exemplo.com" />
            <button>Enviar</button>
          </div>
        </div>
*/

export default function Home() {
  return (
    <section className="homeContent pt-4 border-bottom d-flex flex-column justify-content-between">
      <div className="p- text-center">
        <h1 className="font-weight-bold">
          Nome Loja
        </h1>
        <div className="d-flex flex-row text-center justify-content-center">
          <div className="text-center mr-3">
            <MDBIcon icon="phone" className="mr-1"/>
            <span>(14) 99798-1721</span>
          </div>
          <p className="divider">|</p>
          <div className="text-center ml-3 md:ml-3">
            <span>Cidade - EST</span>
            <MDBIcon icon="map-marker" className="ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
