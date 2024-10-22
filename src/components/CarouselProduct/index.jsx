import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { actFetchAllProducts } from '../../redux/features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const DynamicCarousel = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const { params } = useSelector(
        (state) => state.product
    );
    useEffect(() => {
        // Hàm lấy dữ liệu từ API
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BE_URL}products`); // Thay đổi URL thành API của bạn
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default DynamicCarousel;
