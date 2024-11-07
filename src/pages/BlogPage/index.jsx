import React, { useEffect, useState } from "react";
import { Col, Row, Upload, Button, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { TiDelete } from "react-icons/ti";
import axios from "axios";
import './style.scss';
import { useSelector } from "react-redux";

const BlogPage = () => {
  const { isLogin } = useSelector((state) => state.user);
  const [imgDecors, setImgDecors] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get("https://media.denlongthiendang.com/data.json");
      setImgDecors(response.data.imgDecors || []);
      setFileList([]);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async () => {
    if (!fileList.length) return;

    const uploadedImages = [];
    for (const file of fileList) {
      const formData = new FormData();
      formData.append("image", file.originFileObj);

      try {
        const response = await axios.put(`https://media.denlongthiendang.com/decor/${Date.now()}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        uploadedImages.push(response.data.imgDecor);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    setImgDecors([...imgDecors, ...uploadedImages]);
    setFileList([]);
    setImagePreviews([]);
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
    const previews = fileList.map(file => URL.createObjectURL(file.originFileObj));
    setImagePreviews(previews);
  };

  const handleRemoveImage = (index) => {
    const newFileList = fileList.filter((_, i) => i !== index);
    setFileList(newFileList);

    const newImagePreviews = imagePreviews.filter((_, i) => i !== index);
    setImagePreviews(newImagePreviews);
  };

  return (
    <div className="decor-space-wrapper">
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Không gian trang trí</h3>


      <Row gutter={[16, 16]} className="image-gallery">
        <Image.PreviewGroup>
          {imgDecors.map((imgDecor) => (
            <Col
              key={imgDecor.id_decor}
              xs={24}
              sm={12}
              md={12}
            >
              <Image src={imgDecor.image} alt={`Decor ${imgDecor.id_decor}`} className="decor-image" />
            </Col>
          ))}
        </Image.PreviewGroup>
      </Row>
      {isLogin && (
        <div style={{ marginTop: "10px" }}>
          <Upload
            beforeUpload={() => false}
            onChange={handleFileChange}
            multiple
            accept="image/*"
            fileList={fileList}
          >
            <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
          </Upload>
          <Button type="primary" onClick={handleUpload} disabled={!fileList.length}>
            Upload ảnh
          </Button>
        </div>
      )}

      <ul className="image-preview" style={{ marginTop: "10px" }}>
        {imagePreviews.map((imageUrl, index) => (
          <li key={index} style={{ position: 'relative', display: 'inline-block' }}>
            <Image src={imageUrl} style={{ maxWidth: '200px' }} alt={`preview ${index}`} />
            <button
              className="btn-remove"
              style={{ position: "absolute", top: "-6px", right: "-8px" }}
              onClick={() => handleRemoveImage(index)}
            >
              <TiDelete cursor='pointer' color='red' size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
