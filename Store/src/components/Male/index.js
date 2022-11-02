import React from "react";
import "./styles.css";

import Carousel from "better-react-carousel";

import Jeans from "../../assets/Man/jeansMasculinos.jpeg";
import Moletom from "../../assets/Man/moletom.png";
import Shorts from "../../assets/Man/shorts.jpg";
import Camisetas from "../../assets/Man/camisetas.jpg";
import CamisetasTime from "../../assets/Man/time.jpg";
import Camisas from "../../assets/Man/camisasMasculinas.jpg";

export default function Male() {
  return (
    <div className="container mb-5">
      <h1 className="mb-3 text-center font-weight-bold">Produtos Masulinos</h1>
      <section>
        <Carousel cols={3} rows={1} gap={10} loop>
          <Carousel.Item>
            <img width="100%" src={Jeans} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20cal%C3%A7as."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Moletom} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20blusas."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Shorts} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nos%20shorts."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Camisetas} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20camisetas."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={CamisetasTime} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20blusas%20de%20time."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Camisas} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20camisas."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
        </Carousel>
      </section>
      <div className="d-flex justify-content-end">
        <strong>Produtos meramente ilustrativos.</strong>
      </div>
    </div>
  );
}
