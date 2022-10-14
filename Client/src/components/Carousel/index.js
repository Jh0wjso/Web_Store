import React from "react";
import "./styles.css";
import Carousel from 'react-bootstrap/Carousel';
import blue from "../../assets/Home/blue_background.jpeg";
import gray from "../../assets/Home/gray_background.jpg";
import purple from "../../assets/Home/purple_background.jpg";

export default function IndividualIntervalsExample() {
  return (
    <Carousel className="container"
        controls={false} indicators={false}
    >
      <Carousel.Item interval={2000}>
        <a>
          <img
            className="d-block w-100"
            src={purple}
            height={300}
            alt="First slide"
          />
        </a>
        <Carousel.Caption>
          <h3>Produtos Masculinos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <a>
          <img
            className="d-block w-100"
            src={purple}
            height={300}
            alt="First slide"
          />
        </a>
        <Carousel.Caption>
            <h3>Produtos Femininos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <a>
          <img
            className="d-block w-100"
            src={purple}
            height={300}
            alt="First slide"
          />
        </a>
        <Carousel.Caption>
            <h3>Produtos de Beleza</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}