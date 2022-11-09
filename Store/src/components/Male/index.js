import React from "react";
import "./styles.css";

import Carousel from "better-react-carousel";

import Um from "../../assets/Products/Roupas/Masculinas/1.jpeg";
import Dois from "../../assets/Products/Roupas/Masculinas/2.jpeg";
import Tres from "../../assets/Products/Roupas/Masculinas/3.jpeg";
import Quatro from "../../assets/Products/Roupas/Masculinas/4.jpeg";
import Cinco from "../../assets/Products/Roupas/Masculinas/5.jpeg";
import Seis from "../../assets/Products/Roupas/Masculinas/6.jpeg";
import Sete from "../../assets/Products/Roupas/Masculinas/7.jpeg";
import Oito from "../../assets/Products/Roupas/Masculinas/8.jpeg";
import Nove from "../../assets/Products/Roupas/Masculinas/9.jpeg";
import Dez from "../../assets/Products/Roupas/Masculinas/10.jpeg";
import Onze from "../../assets/Products/Roupas/Masculinas/11.jpeg";
import Doze from "../../assets/Products/Roupas/Masculinas/12.jpeg";

export default function Male() {
  return (
    <div className="container mb-5">
      <h1 className="mb-3 text-center font-weight-bold">Produtos Masulinos</h1>
      <Carousel cols={3} rows={1} gap={10} loop>
        <Carousel.Item>
          <img width="100%" src={Um} className="img-product" />
          <a
            href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nao%20vestidos."
            className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white font-weight-bold text-decoration-none "
          >
            Me interesso
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Dois} className="img-product" />
          <a
            href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20cal%C3%A7as."
            className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
          >
            Me interesso
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Tres} className="img-product" />
          <a
            href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nos%20shorts."
            className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
          >
            Me interesso
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Quatro} className="img-product" />
          <a
            href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20saias."
            className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
          >
            Me interesso
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Cinco} className="img-product" />
          <a
            href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nos%20moletons."
            className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
          >
            Me interesso
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Seis} className="img-product" />
          <a
            href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20blusinhas."
            className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
          >
            Me interesso
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Sete} className="img-product" />
          <a
            href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20blusinhas."
            className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
          >
            Me interesso
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Oito} className="img-product" />
          <a
            href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20blusinhas."
            className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
          >
            Me interesso
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Nove} className="img-product" />
          <a
            href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20blusinhas."
            className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
          >
            Me interesso
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Dez} className="img-product" />
          <a
            href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20blusinhas."
            className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
          >
            Me interesso
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Onze} className="img-product" />
          <a
            href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20blusinhas."
            className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
          >
            Me interesso
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Doze} className="img-product" />
          <a
            href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20estou%20interessado(a)%20nas%20blusinhas."
            className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none font-weight-bold"
          >
            Me interesso
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
