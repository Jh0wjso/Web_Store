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
      <h2 className="mb-3 text-center">Produtos de Beleza</h2>
      <section>
        <Carousel cols={3} rows={1} gap={10} loop>
          <Carousel.Item>
            <img
              width="100%"
              src={Zero15}
              className="img-product"
            />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%20015."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={Exclusive}
              className="img-product"
            />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%20Exclusive."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={FarAway}
              className="img-product"
            />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%20Far%20Away."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={Imari}
              className="img-product"
            />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%20Imari."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={Musk}
              className="img-product"
            />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%Musk."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={Segno}
              className="img-product"
            />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%Segno."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={Essential}
              className="img-product"
            />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%Essential."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={Surreal}
              className="img-product"
            />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%Surreal."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={Victory}
              className="img-product"
            />
            <a
              href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20no%Victory."
              target={"_blank"}
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
}
