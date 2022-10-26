import React from "react";
import "./styles.css";

import Carousel from "better-react-carousel";

import DressImage from "../../assets/Products/dress.jpg";
import JeansWoman from "../../assets/Products/jeansFeminino.jpg";
import ShortJeans from "../../assets/Products/shortJeans.jpg";
import Saia from "../../assets/Products/saiaJeans.jpg";
import Moletom from "../../assets/Products/moletomFeminino.jpg";
import Blusa from "../../assets/Products/blusaFeminina.jpg";

export default function Female() {
  return (
    <div className="container mb-5">
      <h1 className="mb-3 text-center font-weight-bold">Roupas Femininas</h1>
      <section>
        <Carousel cols={3} rows={1} gap={10} loop>
          <Carousel.Item>
            <img width="100%" src={DressImage} className="img-product" />
            <a
              href=""
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white font-weight-bold text-decoration-none "
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={JeansWoman} className="img-product" />
            <a
              href=""
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={ShortJeans} className="img-product" />
            <a
              href=""
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Saia} className="img-product" />
            <a
              href=""
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Moletom} className="img-product" />
            <a
              href=""
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Blusa} className="img-product" />
            <a
              href=""
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
        </Carousel>
        <div className="d-flex justify-content-end">
          <strong>Produtos meramente ilustrativos.</strong>
        </div>
      </section>
    </div>
  );
}
