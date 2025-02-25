import React, { useEffect, useState } from "react";
import { Button, Carousel, Modal, Upload, message, Image, Checkbox } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { TiDelete } from "react-icons/ti";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import "./style.scss";

const CarouselComponent = () => {
  const { isLogin } = useSelector((state) => state.user);
  const [showEditSlide, setShowEditSlide] = useState(false);
  const [imgDecors, setImgDecors] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [visibleImages, setVisibleImages] = useState({});

  useEffect(() => {
    fetchImages();
  }, []);

  // Lấy dữ liệu ảnh từ JSON Server
  const fetchImages = async () => {
    try {
      const response = await axios.get("https://media.denlongthiendang.com/data.json");
      const imagesWithStatus = response.data.imgDecors.map((img) => ({
        ...img,
        isSlide: img.isSlide || false,
      }));
      setImgDecors(imagesWithStatus);

      const slideStatus = Object.fromEntries(
        imagesWithStatus.map((img, index) => [index, img.isSlide])
      );
      setVisibleImages(slideStatus);
    } catch (error) {
      console.error("Lỗi khi tải ảnh:", error);
    }
  };

  // Upload ảnh mới lên server
  const handleUpload = async () => {
    if (!fileList.length) return;

    const uploadedImages = await Promise.all(
      fileList.map(async (file, index) => {
        const formData = new FormData();
        formData.append("image", file.originFileObj);
        const id_decor = Date.now() + index; // Tạo id_decor duy nhất

        try {
          const response = await axios.post(
            `https://media.denlongthiendang.com/decor/${id_decor}`,
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          return { id_decor, image: response.data.imgDecor.image, isSlide: true };
        } catch (error) {
          console.error("Lỗi khi upload ảnh:", error);
          return null;
        }
      })
    );

    const updatedImages = [...imgDecors, ...uploadedImages.filter(Boolean)];
    await fetchImages(); // Cập nhật lại danh sách từ server
    resetUploadState();
  };


  // Lưu danh sách ảnh và trạng thái hiển thị
  const saveImages = async (updatedImages) => {
    try {
      await axios.post("https://media.denlongthiendang.com/data.json", {
        imgDecors: updatedImages,
      });

      message.success("Cập nhật ảnh thành công!");
      fetchImages(); // Cập nhật lại dữ liệu mới nhất từ server
    } catch (error) {
      console.error("Lỗi khi lưu dữ liệu:", error);
      message.error("Cập nhật thất bại!");
    }
  };

  // Reset trạng thái khi upload xong
  const resetUploadState = () => {
    setFileList([]);
    setImagePreviews([]);
    setShowEditSlide(false);
  };

  // Xử lý khi chọn file ảnh mới
  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
    const previews = fileList.map((file) => URL.createObjectURL(file.originFileObj));
    setImagePreviews(previews);
  };

  // Xoá ảnh trong danh sách upload
  const handleRemoveImage = (index) => {
    setFileList((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // Thay đổi trạng thái hiển thị của ảnh
  const handleVisibilityChange = async (imgDecor) => {
    try {
      await axios.post(
        `https://media.denlongthiendang.com/decor/${imgDecor.id_decor}`,
        { isSlide: !imgDecor.isSlide }
      );

      const updatedImages = imgDecors.map((img) =>
        img.id_decor === imgDecor.id_decor ? { ...img, isSlide: !img.isSlide } : img
      );
      setImgDecors(updatedImages);
    } catch (error) {
      console.error("Lỗi khi cập nhật trạng thái hiển thị:", error);
    }
  };


  return (
    <div className="carousel-container">
      <Carousel className="carousel" autoplay effect="fade">
        {imgDecors
          .filter((img) => img.isSlide)
          .map((imgDecor, index) => (
            <div className="carousel__item" key={index}>
              <Link to={ROUTES.BLOG_PAGE}>
                <img className="carousel__item1" src={imgDecor.image} alt={`Slide ${index + 1}`} />
              </Link>
            </div>
          ))}
      </Carousel>

      {isLogin && (
        <div style={{ marginTop: "10px" }}>
          <Button onClick={() => setShowEditSlide(true)}>Chỉnh sửa ảnh slide</Button>
        </div>
      )}

      <Modal
        open={showEditSlide}
        onOk={() => {
          handleUpload();
          setShowEditSlide(false);
        }}
        onCancel={() => setShowEditSlide(false)}

        style={{ top: "50%" }}
      >
        <Upload
          beforeUpload={() => false}
          onChange={handleFileChange}
          multiple
          accept="image/*"
          fileList={fileList}
        >
          <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
        </Upload>

        <ul className="image-preview" style={{ marginTop: "10px" }}>
          {imagePreviews.map((imageUrl, index) => (
            <li key={index} style={{ position: "relative", display: "inline-block" }}>
              <Image src={imageUrl} style={{ maxWidth: "200px" }} alt={`preview ${index}`} />
              <button
                className="btn-remove"
                style={{ position: "absolute", top: "-6px", right: "-8px" }}
                onClick={() => handleRemoveImage(index)}
              >
                <TiDelete cursor="pointer" color="red" size={20} />
              </button>
            </li>
          ))}
        </ul>

        <h3>Chọn ảnh hiển thị:</h3>
        <ul className="image-selection">
          {imgDecors.map((img, index) => (
            <li key={index} style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
              <Image src={img.image} style={{ width: "100px", marginRight: "10px" }} />
              <Checkbox
                checked={img.isSlide}
                onChange={() => handleVisibilityChange(img)}
              >
                Hiển thị
              </Checkbox>

            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default CarouselComponent;
