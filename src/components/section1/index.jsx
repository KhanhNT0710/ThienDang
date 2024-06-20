import React from "react";
import "./style.scss";
import { Button, Col, Row } from "antd";
import { ROUTES } from "../../constants/routes";
import { Link, useNavigate } from "react-router-dom";

const Section1 = () => {
    const navigate = useNavigate();

    const handleRedirectProductPage = () => {
        navigate(ROUTES.PRODUCT_PAGE);
    };

    return (
        <div className="section1-container" >
            <div className="section1-container-title" > <Link className="section1-container-title-link" to={ROUTES.PRODUCT_PAGE}><h3>ĐÈN LỒNG TRUYỀN THỐNG</h3></Link> </div>
            <div className="section1-list-hot-container">
                <div className="section1-list-hot-container__product-hot-grp">
                    <Row className="section1-list-hot-container__list-product">


                        <Col
                            onClick={handleRedirectProductPage}
                            className="section1-list-hot-container__product"
                            xs={12}
                            sm={12}
                            md={8}
                            lg={6}
                            xl={6}
                        >
                            <img
                                src="https://hoiandenlong.com/den/den-long-truyen-thong/8.png"
                                alt=""
                            />
                            <h4 className="section1-list-hot-container__product-name">
                                Đèn lồng vải phi in 3d
                            </h4>
                            <p className="section1-list-hot-container__product-price">
                            </p>
                        </Col>
                        <Col
                            onClick={handleRedirectProductPage}
                            className="section1-list-hot-container__product"
                            xs={12}
                            sm={12}
                            md={8}
                            lg={6}
                            xl={6}
                        >
                            <img
                                src="https://hoiandenlong.com/den/den-long-truyen-thong/9.png"
                                alt=""
                            />
                            <h4 className="section1-list-hot-container__product-name">
                                Đèn lồng vải phi trơn
                            </h4>
                            <p className="section1-list-hot-container__product-price">
                            </p>
                        </Col>
                        <Col
                            onClick={handleRedirectProductPage}
                            className="section1-list-hot-container__product"
                            xs={12}
                            sm={12}
                            md={8}
                            lg={6}
                            xl={6}
                        >
                            <img
                                src="https://hoiandenlong.com/den/den-long-truyen-thong/12.png"
                                alt=""
                            />
                            <h4 className="section1-list-hot-container__product-name">
                                Đèn lồng vải tơ tằm
                            </h4>
                            <p className="section1-list-hot-container__product-price">
                            </p>
                        </Col>
                        <Col
                            onClick={handleRedirectProductPage}
                            className="section1-list-hot-container__product"
                            xs={12}
                            sm={12}
                            md={8}
                            lg={6}
                            xl={6}
                        >
                            <img
                                src="https://hoiandenlong.com/den/den-long-truyen-thong/13.png"
                                alt=""
                            />
                            <h4 className="section1-list-hot-container__product-name">
                                Đèn lồng vải đủi
                            </h4>
                            <p className="section1-list-hot-container__product-price">
                            </p>
                        </Col>


                    </Row>
                </div>
                <div className="section1-list-hot-container__btn-shopping">
                    <Button onClick={handleRedirectProductPage}>XEM THÊM </Button>
                </div>
            </div>

        </div>
    );
}
export default Section1