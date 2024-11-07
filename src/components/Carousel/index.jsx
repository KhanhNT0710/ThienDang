import { Button, Carousel, Modal, Upload, message, Input } from "antd";
import React, { useState } from "react";
import "./style.scss";
import { API_URL } from "../../apis/api";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const CarouselComponent = () => {
  const { isLogin } = useSelector((state) => state.user);
  const [showEditSlide, setShowEditSlide] = useState(false);
  const [carouselImages, setCarouselImages] = useState([
    `${API_URL}/den/slide/11.png`,
    `${API_URL}/den/slide/2.png`,
    `${API_URL}/den/slide/3.png`,
    `${API_URL}/den/slide/4.png`,
    `${API_URL}/den/slide/5.png`,
    `${API_URL}/den/slide/6.png`,
    `${API_URL}/den/slide/8.png`,
    `${API_URL}/den/slide/9.png`
  ]);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleOk = async () => {
    if (!selectedFile) {
      message.warning("Vui lòng chọn một ảnh để tải lên!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.put(`${API_URL}/carousel/1`, formData);

      if (response.status === 200) {
        message.success("Cập nhật thành công!");

        // Cập nhật danh sách ảnh trong carousel
        const updatedImage = response.data.carousel.image;
        setCarouselImages([...carouselImages, updatedImage]);

        // Xóa dữ liệu đã nhập và đóng modal
        setSelectedFile(null);
        setShowEditSlide(false);
      }
    } catch (error) {
      message.error("Cập nhật thất bại!");
    }
  };

  const handleCancel = () => {
    setShowEditSlide(false);
    setSelectedFile(null);
  };

  const handleFileChange = ({ fileList }) => {
    // Chọn file đầu tiên từ fileList để làm selectedFile
    setSelectedFile(fileList.length > 0 ? fileList[0].originFileObj : null);
  };
  const handleRedirect = () => {
    navigate(ROUTES.PRODUCT_PAGE);
  };
  return (
    <div className="carousel-container">
      <Carousel className="carousel" autoplay effect="fade" waitForAnimate="true">
        {carouselImages.map((image, index) => (
          <div className="carousel__item" key={index}>
            <Link to={ROUTES.BLOG_PAGE}>
              <img className="carousel__item1" src={image} alt={`Slide ${index + 1}`} />
            </Link>
          </div>
        ))}
      </Carousel>
      {/* {isLogin && (
        <div>
          <Button onClick={() => setShowEditSlide(true)}>Sửa</Button>
        </div>
      )} */}
      <Modal open={showEditSlide} onOk={handleOk} onCancel={handleCancel} style={{ top: "50%" }}>
        <Upload
          listType="picture"
          onChange={handleFileChange}
          beforeUpload={() => false} // Tắt tự động upload
          showUploadList
        >
          <Button>Chọn ảnh</Button>
        </Upload>

        <Button type="primary" onClick={handleOk} style={{ marginTop: "10px" }}>
          Tải ảnh mới
        </Button>
      </Modal>
    </div>
  );
};

export default CarouselComponent;
