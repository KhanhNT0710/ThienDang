import { Button, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const API_URL = "https://media.denlongthiendang.com/data.json";

const AboutPage = () => {
  const id = 1; // Giả sử bài viết có ID = 1
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const { isLogin } = useSelector((state) => state.user);

  // State cho Modal chỉnh sửa
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Lỗi khi tải dữ liệu!");
        return res.json();
      })
      .then((data) => {
        if (!data.articles) throw new Error("Dữ liệu không hợp lệ!");
        const foundArticle = data.articles.find((item) => item.id === Number(id));
        setArticle(foundArticle || null);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!article) return <p>Đang tải...</p>;

  // Mở modal sửa bài viết
  const openModal = () => {
    form.setFieldsValue({
      title: article.title,
      content: article.content,
    });
    setImageUrl(article.image || null);
    setIsModalVisible(true);
  };

  // Đóng modal
  const closeModal = () => {
    setIsModalVisible(false);
    setImageUrl(null);
    form.resetFields();
  };

  // Xử lý tải ảnh lên
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  // Lưu bài viết sau khi chỉnh sửa
  const handleSubmit = (values) => {
    const updatedArticle = {
      ...article,
      title: values.title,
      content: values.content,
      image: imageUrl || article.image || "",
    };

    setArticle(updatedArticle);
    closeModal();
  };

  return (
    <div className="about-container">
      <h3>{article.title}</h3>
      {article.image && (
        <img
          src={article.image.startsWith("/") ? `https://media.denlongthiendang.com${article.image}` : article.image}
          alt={article.title}
          style={{ maxWidth: "100%" }}
        />
      )}
      <p>{article.content}</p>

      {isLogin && (
        <Button type="primary" onClick={openModal} style={{ marginTop: "10px" }}>
          Sửa bài viết
        </Button>
      )}

      {/* Modal Sửa bài viết */}
      <Modal
        title="Chỉnh sửa bài viết"
        open={isModalVisible}
        onCancel={closeModal}
        footer={null}
        style={{ top: 20, zIndex: 9999 }}
        bodyStyle={{ maxHeight: "70vh", overflowY: "auto" }}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Tiêu đề" name="title" rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Nội dung" name="content" rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}>
            <Input.TextArea rows={4} />
          </Form.Item>

          {/* Hiển thị ảnh cũ */}
          {imageUrl && (
            <div style={{ marginBottom: "10px", textAlign: "center" }}>
              <img src={imageUrl} alt="Ảnh bài viết" style={{ maxWidth: "100%", maxHeight: "200px" }} />
              <Button type="danger" onClick={() => setImageUrl(null)} style={{ marginTop: "5px" }}>
                Xóa ảnh
              </Button>
            </div>
          )}

          {/* Upload ảnh mới */}
          <Form.Item label="Ảnh bài viết">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Lưu thay đổi
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AboutPage;
