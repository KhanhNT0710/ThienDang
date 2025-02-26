import React from "react";
import CarouselComponent from "../Carousel";
import AboutContent from "../section2";
import "./style.scss";
import Section3 from "../section3";
import Section4 from "../section4";
import Section1 from "../section1";
import Section5 from "../section5";
import SLideProduct from "../SlideProducts";
import OpenLanterns from "../OpenLanterns";
import SlideOtherProduct from "../OtherProduct";

const ContentNormal = () => {
  return (
    <div className="content-normal-container">
      <div>      <CarouselComponent /></div>
      <div>      <AboutContent /></div>

      <div>      <Section1 /></div>
      {/* đèn lồng khác  */}
      <div>
        <SlideOtherProduct />
      </div>
      {/* sản phẩm nổi bật  */}
      <div> <SLideProduct /> </div>
      {/* xưởng */}
      <div>      <Section4 />      </div>
      <OpenLanterns />
    </div>
  );
};

export default ContentNormal;
