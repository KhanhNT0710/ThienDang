// src/ImageList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from 'antd';
import Slider from 'react-slick';
import "./style.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = ({
    refresh,
    setRefresh
}) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://media.denlongthiendang.com/products');
                setImages(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [refresh]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const ImageSlider = ({ imgs }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
        };
        const handlePrevious = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : imgs.length - 1
            );
        };

        const handleNext = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex < imgs.length - 1 ? prevIndex + 1 : 0
            );
        };
        const handleChange = (e) => {
            setCurrentIndex(e.value);
        };
        if (images.length === 0) {
            return <p>No images available</p>;
        }

        return (
            <div className="image-slider">
                <Slider
                    value={currentIndex}
                    onChange={handleChange}
                    min={0}
                    max={imgs.length - 1}
                    step={1}
                    orientation="horizontal"
                    style={{ width: "100%" }}
                    className="image-slider"
                />
                <div className="slider-image">
                    <Image

                        src={imgs[currentIndex]}
                        alt={currentIndex}
                        style={{ width: "100%" }}
                    />
                    <button onClick={handlePrevious} className="button-prev">
                        &lt;
                    </button>
                    <button onClick={handleNext} className="button-next">
                        &gt;
                    </button>
                    {/* <div className="slide-number">
                        {currentIndex + 1} / {imgs.length}
                    </div> */}
                </div>
            </div>
        );
    };
    return (
        <div className='list-product-mana'>
            <div>

                {images?.map(product => (
                    <nav key={product.id_product} style={{ marginBottom: '20px' }}>
                        <div className="product-images">
                            <ImageSlider imgs={product.urls} />.
                        </div>
                        <h4 id='custom_name_product'>Tên sản phẩm: {product?.name}</h4>
                        <p>Phân loại: {product?.category}</p>
                        <p>Giá: {product?.price}</p>
                        <p>Thể loại: {product?.style}</p>
                        <p>Chi tiết: {product?.productDetail}</p>
                    </nav>
                ))}
            </div>

        </div>
    );
};

export default ImageList;
