import React, { useState } from "react";
import Slider from "react-slick";
import './style.scss'
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { API_URL } from "../../apis/api";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function SlideProduct() {
    const [display, setDisplay] = useState(true);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,  // Mặc định hiển thị 4 ảnh
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <PrevButton />, // Nút trái tùy chỉnh
        nextArrow: <NextButton />, // Nút phải tùy chỉnh
        responsive: [
            {
                breakpoint: 500,  // Kích thước màn hình dưới 500px
                settings: {
                    slidesToShow: 1,  // Hiển thị 1 ảnh mỗi slide
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <div className='slider-container__title'>
                <Link className='slider-container__title-link' to={ROUTES.PRODUCT_PAGE}><h3>SẢN PHẨM NỔI BẬT</h3></Link>
            </div>
            <div
                className="slider-container_product"
                style={{

                    display: display ? "block" : "none"
                }}
            >
                <Slider
                    autoplay
                    effect="fade"
                    waitForAnimate="true"
                    {...settings}>
                    <div>
                        <img
                            src={`${API_URL}/den/san-pham-noi-bat/den-5-mau-co-phat-dan-khung-tre.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN MÀU CỜ PHẬT ĐẢN</h4>
                    </div>
                    <div>
                        <img
                            src={`${API_URL}/den/san-pham-noi-bat/den-long-chuong-khung-thep.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN CHUÔNG KHUNG THÉP</h4>
                    </div>
                    <div>
                        <img
                            src={`${API_URL}/den/san-pham-noi-bat/den-long-tru-khung-thep.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN TRỤ KHUNG THÉP</h4>
                    </div>
                    <div>
                        <img
                            src={`${API_URL}/den/san-pham-noi-bat/vai-phi-3d-khung-tre.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN VẢI PHI IN 3D KHUNG TRE</h4>
                    </div>
                    <div>
                        <img
                            src={`${API_URL}/den/san-pham-noi-bat/vai-phi-3d-mau-toi.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN VẢI PHI IN 3D MẪU TỎI</h4>
                    </div>
                    <div>
                        <img
                            src={`${API_URL}/den/san-pham-noi-bat/den-long-dan-day-khung-thep.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN ĐAN DÂY KHUNG THÉP</h4>
                    </div>
                    <div>
                        <img
                            src={`${API_URL}/den/san-pham-noi-bat/den-long-trai-tim-khung-thep.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN TRÁI TIM KHUNG THÉP</h4>
                    </div>
                    <div>
                        <img
                            src={`${API_URL}/den/san-pham-noi-bat/den-long-vai-dui-khung-tre.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN VẢI ĐỦI KHUNG TRE</h4>
                    </div>
                    <div>
                        <img
                            src={`${API_URL}/den/san-pham-noi-bat/den-long-vai-to-tam-khung-tre.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN VẢI TƠ TẰM KHUNG TRE</h4>
                    </div>
                    <div>
                        <img
                            src={`${API_URL}/den/san-pham-noi-bat/den-vai-phi-3d-nhieu-mau.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN VẢI PHI IN 3D NHIỀU MÀU</h4>
                    </div>
                    <div>
                        <img
                            src={`${API_URL}/den/san-pham-noi-bat/phi-3d.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN VẢI PHI IN 3D KHUNG TRE</h4>
                    </div>

                </Slider>
            </div>
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


export default SlideProduct;
