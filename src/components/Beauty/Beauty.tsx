import React from "react";
import "./styles.css";

import Carousel from "better-react-carousel";

import Zero15 from "../../assets/Beauty/015.jpeg";
import Exclusive from "../../assets/Beauty/exclusive.jpg";
import FarAway from "../../assets/Beauty/faraway.jpeg";
import Imari from "../../assets/Beauty/imari.jpeg";
import Musk from "../../assets/Beauty/musk.jpeg";
import Segno from "../../assets/Beauty/segno.jpeg";
import Surreal from "../../assets/Beauty/surreal.jpeg";
import Victory from "../../assets/Beauty/victory.jpeg";
import Essential from "../../assets/Beauty/essentialBlack.jpeg";

export default function Beauty() {
  return (
    <div className="container mb-5">
      <h1 className="mb-3 text-center font-weight-bold">Produtos de Beleza</h1>
      <section>
        <Carousel cols={3} rows={1} gap={10} loop>
          <Carousel.Item>
            <img width="100%" src={Zero15} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%20015."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Exclusive} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%20Exclusive."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={FarAway} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%20Far%20Away."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Imari} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%20Imari."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Musk} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%20Musk."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Segno} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%20Segno."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Essential} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%20Essential."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Surreal} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%20Surreal."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Victory} className="img-product" />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%20Victory."
              target={"_blank"}
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
