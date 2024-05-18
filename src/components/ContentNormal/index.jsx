import React from "react";
import CarouselComponent from "../Carousel";
import Section2 from "../section2";
import "./style.scss";
import Section3 from "../section3";
import Section4 from "../section4";
import Section1 from "../section1";

const ContentNormal = () => {
  return (
    <div className="content-normal-container">
      <CarouselComponent />
      <Section3 />
      <Section1 />
      <Section2 />
      <Section4 />
    </div>
  );
};

export default ContentNormal;
