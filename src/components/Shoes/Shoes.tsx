import React from "react";
import "./styles.css";

import Carousel from "better-react-carousel";

import Um from "../../assets/Products/Sapatos/1.jpeg";
import Dois from "../../assets/Products/Sapatos/2.jpeg";
import Tres from "../../assets/Products/Sapatos/3.jpeg";
import Quatro from "../../assets/Products/Sapatos/4.jpeg";
import Cinco from "../../assets/Products/Sapatos/5.jpeg";
import Seis from "../../assets/Products/Sapatos/6.jpeg";
import Sete from "../../assets/Products/Sapatos/7.jpeg";
import Oito from "../../assets/Products/Sapatos/8.jpeg";
import Nove from "../../assets/Products/Sapatos/9.jpeg";

export default function Shoes() {
  return (
    <div className="container mb-5">
      <h1 className="mb-3 text-center font-weight-bold">Sapatos Femininos</h1>
      <section>
        <Carousel cols={3} rows={1} gap={10} loop>
          <Carousel.Item>
            <img width="100%" src={Um} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nos%20sapatos%20do%20site."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white font-weight-bold text-decoration-none "
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Dois} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nos%20sapatos%20do%20site."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Tres} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nos%20sapatos%20do%20site."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Quatro} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nos%20sapatos%20do%20site."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Cinco} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nos%20sapatos%20do%20site."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Seis} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nos%20sapatos%20do%20site."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Sete} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nos%20sapatos%20do%20site."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Oito} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nos%20sapatos%20do%20site."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Nove} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nos%20sapatos%20do%20site."
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
}
