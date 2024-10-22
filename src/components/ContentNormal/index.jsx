import React from "react";
import CarouselComponent from "../Carousel";
import Section2 from "../section2";
import "./style.scss";
import Section3 from "../section3";
import Section4 from "../section4";
import Section1 from "../section1";
import Section5 from "../section5";
import SLideProduct from "../SlideProducts";

const ContentNormal = () => {
  return (
    <div className="content-normal-container">
      <div>      <CarouselComponent /></div>
      <div>      <Section2 /></div>
      {/* <div><Section5 /> </div> */}

      <div>      <Section1 /></div>
      <div> <SLideProduct /> </div>
      <div>      <Section4 />      </div>
    </div>
  );
};

export default ContentNormal;
