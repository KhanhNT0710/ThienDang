import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TiDelete } from "react-icons/ti";
import { Button, Image, Upload, Input, Select, message as antdMessage } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select; // Khai báo Option từ Select

const ProductUpload = ({ refresh, setRefresh }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [linkImgs, setLinkImgs] = useState([]);
    const [message, setMessage] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [style, setStyle] = useState('');
    const [productDetail, setProductDetail] = useState('');
    const [imagePreviews, setImagePreviews] = useState([]);
    const [fileList, setFileList] = useState([]); // Lưu lại fileList của Upload
    const [categories, setCategories] = useState([]); // Lưu danh sách danh mục

    useEffect(() => {
        // Hàm lấy danh sách danh mục
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://media.denlongthiendang.com/categories');
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
                antdMessage.error('Failed to load categories.');
            }
        };

        fetchCategories();
    }, [refresh]);

    const handleFileChange = ({ fileList }) => {
        setFileList(fileList);
        const files = fileList.map(file => file.originFileObj).filter(Boolean);
        setSelectedFiles(files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setImagePreviews(imageUrls);
    };

    const handleUpload = async () => {
        if (selectedFiles.length === 0) {
            antdMessage.warning('Please select files before uploading.');
            return;
        }

        const formData = new FormData();
        selectedFiles.forEach(file => {
            formData.append('images', file);
        });
        formData.append('categoryId', categoryId);
        formData.append('category', category);
        formData.append('name', name);
        formData.append('price', "");
        formData.append('style', style);
        formData.append('productDetail', productDetail);

        try {
            const response = await axios.post('https://media.denlongthiendang.com/upload', formData);
            if (response.status === 200) {
                setLinkImgs(response.data.fileUrls);
                setMessage('Upload successful!');
                resetForm();
            }
            setRefresh(!refresh);
        } catch (error) {
            console.error("Error uploading files:", error.response ? error.response.data : error.message);
            setMessage('Upload failed!');
        }
    };

    const resetForm = () => {
        setSelectedFiles([]);
        setFileList([]);
        setLinkImgs([]);
        setCategoryId('');
        setCategory(''); // Đặt lại category
        setName('');
        setPrice('');
        setStyle('');
        setProductDetail('');
        setImagePreviews([]);
    };

    const handleRemoveImage = (indexToRemove) => {
        const updatedFiles = selectedFiles.filter((_, index) => index !== indexToRemove);
        setSelectedFiles(updatedFiles);
        const updatedPreviews = imagePreviews.filter((_, index) => index !== indexToRemove);
        setImagePreviews(updatedPreviews);
        setFileList(fileList.filter((_, index) => index !== indexToRemove));
    };

    const handleCategoryChange = (value) => {
        const selectedCategory = categories.find(cat => cat.categoryId === value);
        if (selectedCategory) {
            setCategoryId(selectedCategory.categoryId);
            setCategory(selectedCategory.name); // Cập nhật category
        }
    };
    console.log(category, "category");

    return (
        <div className='product-upload-container'>
            <h2>Tạo mới sản phẩm</h2>

            <div>
                <Select
                    placeholder="Chọn danh mục"
                    value={categoryId}
                    onChange={handleCategoryChange}
                    style={{ width: '100%', marginBottom: '10px' }}
                >
                    {categories.map(cat => (
                        <Option key={cat.categoryId} value={cat.categoryId}>
                            {cat.name}
                        </Option>
                    ))}
                </Select>
                <nav className='product_creat d-flex'>
                    <nav>Tên sản phẩm</nav>
                    <Input placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />

                </nav>


                <nav className='product_creat d-flex'>
                    <nav>Thể loại</nav>

                    <Input placeholder="Style" value={style} onChange={(e) => setStyle(e.target.value)} />

                </nav>
                <nav className='product_creat d-flex'>
                    <nav>Chi tiết</nav>

                    <Input placeholder="Product Detail" value={productDetail} onChange={(e) => setProductDetail(e.target.value)} />
                </nav>

            </div>
            <Upload
                multiple
                accept="image/*"
                onChange={handleFileChange}
                showUploadList={false}
                beforeUpload={() => false}
                fileList={fileList}
            >
                <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
            </Upload>
            <ul style={{ position: 'relative' }}>
                {imagePreviews.map((imageUrl, index) => (
                    <li key={index} style={{ position: 'relative', display: 'inline-block', margin: '10px' }}>
                        <Image src={imageUrl} style={{ maxWidth: '200px' }} alt={`preview ${index}`} />
                        <button
                            className="btn-remove"
                            style={{ position: "absolute", top: "-6px", right: "-8px" }}
                            onClick={() => handleRemoveImage(index)}
                        >
                            <TiDelete cursor='pointer' color='red' size={15} />
                        </button>
                    </li>
                ))}
            </ul>
            <Button className='btn_upload_product' type="primary" onClick={handleUpload} style={{ marginTop: '10px' }}>
                Tạo sản phẩm
            </Button>

        </div>
    );
};

export default ProductUpload;
