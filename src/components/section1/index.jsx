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
        <div className="section1-container" >
            <div className="section1-container-title" > <Link className="section1-container-title-link" to={ROUTES.PRODUCT_PAGE}><h3>ĐÈN LỒNG TRUYỀN THỐNG</h3></Link> </div>
            <Row className='section1-container__list-product'>
                <Col onClick={() => navigate(ROUTES.PRODUCT_PAGE)} className='section1-container__product'
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                >
                    <div>
                        <img
                            src={`${API_URL}/den/truyen-thong/den-du.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN LỒNG DÙ</h4>
                    </div>
                </Col>
                <Col onClick={() => navigate(ROUTES.PRODUCT_PAGE)} className='section1-container__product'
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                >
                    <div>
                        <img
                            src={`${API_URL}/den/truyen-thong/den-toi.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN LỒNG TỎI</h4>
                    </div>
                </Col>
                <Col onClick={() => navigate(ROUTES.PRODUCT_PAGE)} className='section1-container__product'
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                >
                    <div>
                        <img
                            src={`${API_URL}/den/truyen-thong/dia-bay.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN ĐĨA BAY</h4>
                    </div>
                </Col>
                <Col onClick={() => navigate(ROUTES.PRODUCT_PAGE)} className='section1-container__product'
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                >
                    <div>
                        <img
                            src={`${API_URL}/den/truyen-thong/kim-cuong.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN KIM CƯƠNG</h4>
                    </div>
                </Col>
                <Col onClick={() => navigate(ROUTES.PRODUCT_PAGE)} className='section1-container__product'
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                >
                    <div>
                        <img
                            src={`${API_URL}/den/truyen-thong/kim-cuong-nguoc.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN KIM CƯƠNG NGƯỢC</h4>
                    </div>

                </Col>
                <Col onClick={() => navigate(ROUTES.PRODUCT_PAGE)} className='section1-container__product'
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                >
                    <div>
                        <img
                            src={`${API_URL}/den/truyen-thong/na.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN QUẢ NA</h4>
                    </div>

                </Col>
                <Col onClick={() => navigate(ROUTES.PRODUCT_PAGE)} className='section1-container__product'
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                >
                    <div>
                        <img
                            src={`${API_URL}/den/truyen-thong/toi-nguoc.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN TỎI NGƯỢC</h4>
                    </div>
                </Col>
                <Col onClick={() => navigate(ROUTES.PRODUCT_PAGE)} className='section1-container__product'
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                >
                    <div>
                        <img
                            src={`${API_URL}/den/truyen-thong/tron.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN TRÒN</h4>
                    </div>
                </Col>
                <Col onClick={() => navigate(ROUTES.PRODUCT_PAGE)} className='section1-container__product'
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                >
                    <div>
                        <img
                            src={`${API_URL}/den/truyen-thong/u.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN BÁNH Ú</h4>
                    </div>
                </Col>
                <Col onClick={() => navigate(ROUTES.PRODUCT_PAGE)} className='section1-container__product'
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                >
                    <div>
                        <img
                            src={`${API_URL}/den/truyen-thong/vai-phi-3d.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN VẢI PHI IN 3D</h4>
                    </div>
                </Col>
                <Col onClick={() => navigate(ROUTES.PRODUCT_PAGE)} className='section1-container__product'
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                >
                    <div>
                        <img
                            src={`${API_URL}/den/truyen-thong/vai-phi-tron.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN VẢI PHI TRƠN</h4>
                    </div>
                </Col>
                <Col onClick={() => navigate(ROUTES.PRODUCT_PAGE)} className='section1-container__product'
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                >
                    <div>
                        <img
                            src={`${API_URL}/den/truyen-thong/vai-to-tam-2.jpg`}
                            alt=""
                        />
                        <h4>ĐÈN VẢI TƠ TẰM</h4>
                    </div>
                </Col>


            </Row>

        </div>
    );
}
export default Section1