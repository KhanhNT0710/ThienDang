import React, { useEffect, useState } from "react";
import { Col, Row, Upload, Button, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { TiDelete } from "react-icons/ti";
import axios from "axios";
import './style.scss';

const UploadImgOther = () => {
    const [otherImgs, setOtherImgs] = useState([]); // đổi tên thành otherImgs
    const [fileList, setFileList] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);

    // API để lấy danh sách ảnh otherImgs
    const fetchImages = async () => {
        try {
            const response = await axios.get("https://media.denlongthiendang.com/data.json");
            setOtherImgs(response.data.otherImgs || []); // lấy otherImgs từ API
            setFileList([]);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    // API để upload ảnh
    const handleUpload = async () => {
        if (!fileList.length) return;

        const uploadedImages = [];
        for (const file of fileList) {
            const formData = new FormData();
            formData.append("image", file.originFileObj);

            try {
                const response = await axios.put(`https://media.denlongthiendang.com/other/${Date.now()}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                uploadedImages.push(response.data.otherImg); // cập nhật với otherImg thay vì imgDecor
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }

        setOtherImgs([...otherImgs, ...uploadedImages]); // cập nhật otherImgs
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
        <div className="d-flex justify-content-around">

            <div>
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
            <div className='list-product-mana'>
                <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Đèn lồng khác</h1>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {otherImgs.map((otherImg) => ( // đổi imgDecor thành otherImg
                        <Image src={otherImg.image} alt={`Other ${otherImg.id_other}`} className="other-mana-image" />

                    ))}
                </div>
            </div>

        </div>
    );
};

export default UploadImgOther;
