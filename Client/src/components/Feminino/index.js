import React from "react";
import "./styles.css";

import Carousel from "better-react-carousel";

export default function Feminino() {
  return (
    <div className="container">
        <h2
            className="mb-3"
        >
            Roupas Femininas
        </h2>
      <section>
        <Carousel cols={3} rows={1} gap={10} loop>
          <Carousel.Item>
            <img
              width="100%"
              src="https://picsum.photos/800/600?random=1"
              className="rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src="https://picsum.photos/800/600?random=2"
              className="rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src="https://picsum.photos/800/600?random=1"
              className="rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src="https://picsum.photos/800/600?random=2"
              className="rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src="https://picsum.photos/800/600?random=1"
              className="rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src="https://picsum.photos/800/600?random=2"
              className="rounded"
            />
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
}
