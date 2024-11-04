import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import DynamicCarousel from "../CarouselProduct";

const OpenLanterns = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="openLanterns-container d-flex gap-3">
      <nav className="video-wrapper">
        <iframe
          width="380"
          height="200"
          src="https://www.youtube.com/embed/UsKFx2xUnf0?si=HkMtC2FmRk0eTsGh"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </nav>



      {/* Hiển thị các video còn lại khi showMore = true hoặc trên màn hình lớn */}
      {(showMore || !isMobile) && (
        <>
          <nav className="video-wrapper">
            <iframe
              width="380"
              height="200"
              src="https://www.youtube.com/embed/qXdguzfcLE0?si=z8mEH87ejMYn9_fm"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </nav>
          <nav className="video-wrapper">
            <iframe
              width="380"
              height="200"
              src="https://www.youtube.com/embed/5kcWllSaGWY?si=tGIMIFXpXJNAL67c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </nav>
        </>
      )}
      {/* Nút "Xem thêm" chỉ hiển thị trên màn hình nhỏ */}
      {isMobile && (
        <button
          className="view-more"
          onClick={() => setShowMore(!showMore)}
          style={{ marginBottom: "1rem" }}
        >
          {showMore ? "Thu gọn" : "Xem thêm"}
        </button>
      )}
    </div>
  );
};
export default OpenLanterns;
