import React, { useState } from "react";
import Slider from "react-slick";
import './style.scss'
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { API_URL } from "../../apis/api";

function SlideProduct() {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(1200);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <div className='slider-container__title'>
                <Link className='slider-container__title-link' to={ROUTES.PRODUCT_PAGE}><h3>SẢN PHẨM NỔI BẬT</h3></Link>
            </div>
            <div
                style={{
                    width: width + "px",
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

export default SlideProduct;
