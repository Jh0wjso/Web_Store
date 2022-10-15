import React from "react";
import "./styles.css";

import { MDBIcon } from "mdb-react-ui-kit";

export default function Home() {
  return (
    <section className="homeContent mt-5 border-bottom d-flex flex-column justify-content-between">
      <section className="text-center">
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
      </section>
    </section>
  );
}
