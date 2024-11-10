import { Button, Carousel, Modal, Upload, message, Input } from "antd";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { API_URL } from "../../apis/api";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const CarouselComponent = () => {
  const { isLogin } = useSelector((state) => state.user);
  const [showEditSlide, setShowEditSlide] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const fetchImages = async () => {
    try {
      const response = await axios.get("https://media.denlongthiendang.com/data.json");
      // Lấy danh sách imgDecors từ API và chỉ giữ lại tối đa 10 ảnh
      const imgDecors = response.data.imgDecors || [];
      setCarouselImages(imgDecors.slice(0, 10));
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="carousel-container">
      <Carousel className="carousel" autoplay effect="fade" waitForAnimate="true">
        {carouselImages.map((decor, index) => (
          <div className="carousel__item" key={decor.id_decor}>
            <Link to={ROUTES.BLOG_PAGE}>
              <img className="carousel__item1" src={decor.image} alt={`Slide ${index + 1}`} />
            </Link>
          </div>
        ))}
      </Carousel>
      {/* {isLogin && (
        <div>
          <Button onClick={() => setShowEditSlide(true)}>Sửa</Button>
        </div>
      )} */}
    </div>
  );
};

export default CarouselComponent;
