import React from "react";
import "./styles.css";

import Carousel from "better-react-carousel";

export default function Female() {
  return (
    <div className="container mb-5">
      <h2 className="mb-3 text-center">Roupas Femininas</h2>
      <section>
        <Carousel cols={3} rows={1} gap={10} loop>
          <Carousel.Item>
            <img
              width="100%"
              src="https://picsum.photos/800/600?random=1"
              className="img-product"
            />
            <a
              href=""
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src="https://picsum.photos/800/600?random=2"
              className="img-product"
            />
            <a
              href=""
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src="https://picsum.photos/800/600?random=3"
              className="img-product"
            />
            <a
              href=""
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src="https://picsum.photos/800/600?random=4"
              className="img-product"
            />
            <a
              href=""
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src="https://picsum.photos/800/600?random=5"
              className="img-product"
            />
            <a
              href=""
              className="btn-interesse border-0 w-100 d-flex justify-content-center p-2 text-white text-decoration-none"
            >
              Me interesso
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src="https://picsum.photos/800/600?random=6"
              className="img-product"
            />
            <a
              href=""
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
