import React from "react";
import "./styles.css";

import { MDBIcon } from "mdb-react-ui-kit";

export default function Home() {
  return (
    <section className="homeContent mt-5 d-flex flex-column justify-content-between">
      <section className="text-center contentStore">
        <section className="d-flex justify-content-center align-items-center">
          <h1 className="text-center font-weight-bold" style={{ fontSize: 80 }}>
            Stylos <br />
            <h1 style={{ fontSize: 60, marginLeft: 100 }}>
              Store
            </h1>
          </h1>
        </section>
        <div className="number_location text-center">
          <div className="text-center mr-3">
            <MDBIcon icon="phone" className="mr-1" />
            <span>(14) 99807-4693</span>
          </div>
          <p className="divider">|</p>
          <div className="text-center ml-3 md:ml-3">
            <span>Tejupa - SP</span>
            <MDBIcon icon="map-marker" className="ml-1" />
          </div>
        </div>
      </section>
    </section>
  );
}
