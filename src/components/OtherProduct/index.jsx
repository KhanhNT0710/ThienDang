import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './style.scss';
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import axios from "axios";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function SlideOtherProduct() {
    const [products, setProducts] = useState([]);
    console.log(products, "pro");

    // Fetch data from API
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://media.denlongthiendang.com/data.json');
            setProducts(response.data.otherImgs || []);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <PrevButton />, // Nút trái tùy chỉnh
        nextArrow: <NextButton />, // Nút phải tùy chỉnh
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    if (products.length === 0) {
        return <></>;
    }
    return (
        <div className="slider-other-container">
            <div className='slider-container__title'>
                <Link className='slider-container__title-link' to={ROUTES.PRODUCT_PAGE}>
                    <h3>ĐÈN LỒNG KHÁC</h3>
                </Link>
            </div>
            <Slider {...settings}>
                {products.map((product, index) => (
                    <div key={index} className="slider-item">
                        <img
                            src={product.image}
                            alt={product.name || `Other Lantern ${index}`}
                            className="centered-image"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

// Nút điều hướng tùy chỉnh
const PrevButton = (props) => {
    const { className, onClick } = props;
    return (
        <button className={`${className} custom-prev`} onClick={onClick}>
            <LeftOutlined />
        </button>
    );
};

const NextButton = (props) => {
    const { className, onClick } = props;
    return (
        <button className={`${className} custom-next`} onClick={onClick}>
            <RightOutlined />
        </button>
    );
};

export default SlideOtherProduct;
