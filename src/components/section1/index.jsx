import React, { useState } from "react";
import Slider from "react-slick";
import './style.scss'
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Col, Row } from "antd";
import { API_URL } from "../../apis/api";

const Section1 = () => {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(1200);
    const navigate = useNavigate();

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <div className="section1-container">
            <div className="section1-container-title">
                <Link className="section1-container-title-link" to={ROUTES.PRODUCT_PAGE}>
                    <h3>ĐÈN LỒNG TRUYỀN THỐNG</h3>
                </Link>
            </div>
            <Row className='section1-container__list-product'>
                {[ // Mảng các sản phẩm
                    { src: 'den-du.jpg', title: 'ĐÈN LỒNG DÙ' },
                    { src: 'den-toi.jpg', title: 'ĐÈN LỒNG TỎI' },
                    { src: 'dia-bay.jpg', title: 'ĐÈN ĐĨA BAY' },
                    { src: 'kim-cuong.jpg', title: 'ĐÈN KIM CƯƠNG' },
                    { src: 'kim-cuong-nguoc.jpg', title: 'ĐÈN KIM CƯƠNG NGƯỢC' },
                    { src: 'na.jpg', title: 'ĐÈN QUẢ NA' },
                    { src: 'toi-nguoc.jpg', title: 'ĐÈN TỎI NGƯỢC' },
                    { src: 'tron.jpg', title: 'ĐÈN TRÒN' },
                    { src: 'u.jpg', title: 'ĐÈN BÁNH Ú' },
                    { src: 'vai-phi-3d.jpg', title: 'ĐÈN VẢI PHI IN 3D' },
                    { src: 'vai-phi-tron.jpg', title: 'ĐÈN VẢI PHI TRƠN' },
                    { src: 'vai-to-tam-2.jpg', title: 'ĐÈN VẢI TƠ TẰM' }
                ].map((product, index) => (
                    <Col
                        key={index}
                        onClick={() => navigate(ROUTES.PRODUCT_PAGE)}
                        className='section1-container__product'
                        xs={12} sm={12} md={8} lg={6} xl={6}
                    >
                        <div>
                            <img src={`${API_URL}/den/truyen-thong/${product.src}`} alt={product.title} />
                            <h4>{product.title}</h4>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>

    );
}
export default Section1