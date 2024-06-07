import { Carousel } from "antd";
import React from "react";
import "./style.scss";

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
            src="https://static-6.happynest.vn/storage/uploads/2020/04/a07f66ba151961c8fcdb38b33996775f.png"
            alt=""
          />
        </div>

        <div className="carousel__item">
          <img
            className="carousel__item2"
            src="https://hoagood.com/wp-content/uploads/2020/04/Trang-tri-phong-tro-nho-cuc-xinh-110422-0000.jpg"
            alt=""
          />
        </div>

        <div className="carousel__item">
          <img
            className="carousel__item3"
            src="https://hn.ss.bfcplatform.vn/tckt/2020/09/20B09017-1.jpg"
            alt=""
          />
        </div>

        <div className="carousel__item">
          <img
            className="carousel__item4"
            src="https://imgs.vietnamnet.vn/Images/2016/10/28/14/20161028145228-phong-khach-1.jpg"
            alt=""
          />
        </div>

        <div className="carousel__item">
          <img
            className="carousel__item5"
            src="https://afamilycdn.com/150157425591193600/2020/2/24/15063b9e423bba65e32a-15825258392311251837178.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
