import { Carousel } from "antd";
import React from "react";
import "./style.scss";
import { API_URL } from "../../apis/api";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel
        className="carousel"
        autoplay
        effect="fade"
        waitForAnimate="true"
      >
        <div className="carousel__item">
          <img
            className="carousel__item1"
            src={`${API_URL}/den/slide/11.png`}
            alt=""
          />
        </div>
        <div className="carousel__item">
          <img
            className="carousel__item1"
            src={`${API_URL}/den/slide/2.png`}
            alt=""
          />
        </div>
        <div className="carousel__item">
          <img
            className="carousel__item1"
            src={`${API_URL}/den/slide/3.png`}
            alt=""
          />
        </div>
        <div className="carousel__item">
          <img
            className="carousel__item1"
            src={`${API_URL}/den/slide/4.png`}
            alt=""
          />
        </div>
        <div className="carousel__item">
          <img
            className="carousel__item1"
            src={`${API_URL}/den/slide/5.png`}
            alt=""
          />
        </div>
        <div className="carousel__item">
          <img
            className="carousel__item1"
            src={`${API_URL}/den/slide/6.png`}
            alt=""
          />
        </div>

        <div className="carousel__item">
          <img
            className="carousel__item1"
            src={`${API_URL}/den/slide/8.png`}
            alt=""
          />
        </div>
        <div className="carousel__item">
          <img
            className="carousel__item1"
            src={`${API_URL}/den/slide/9.png`}
            alt=""
          />
        </div>



      </Carousel>
    </div>
  );
};

export default CarouselComponent;
