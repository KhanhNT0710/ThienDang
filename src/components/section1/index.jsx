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
            <div className="section1-container-title" > <Link className="section1-container-title-link" to={ROUTES.PRODUCT_PAGE}><h3>XU HƯỚNG</h3></Link> </div>
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
                                src="https://tamshoppe.vn/Thumb/Web/Resources/Uploaded/2/images/san-pham/Den-Led/day-den-kep-anh-led-vang-am-2_w400_h300.jpg"
                                alt=""
                            />
                            <p className="section1-list-hot-container__product-name">
                                Dây đèn kẹp ảnh Led vàng ấm 5m 30 kẹp
                            </p>
                            <p className="section1-list-hot-container__product-price">
                                100.000
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
                                src="https://tamshoppe.vn/Thumb/Web/Resources/Uploaded/2/images/san-pham/tinh-dau-thien-nhien-qua-tang-y-nghia-6_w400_h300.jpeg"
                                alt=""
                            />
                            <p className="section1-list-hot-container__product-name">
                                Set 7 chai tinh dầu thiên nhiên
                            </p>
                            <p className="section1-list-hot-container__product-price">
                                420.000
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
                                src="https://tamshoppe.vn/Thumb/Web/Resources/Uploaded/2/images/san-pham/Lam-theo-yeu-cau/bang-hieu-khung-cui-quan-day-thung-rustic-1_w400_h300.jpg"
                                alt=""
                            />
                            <p className="section1-list-hot-container__product-name">
                                Bảng hiệu khung củi quấn dây thừng Rustic
                            </p>
                            <p className="section1-list-hot-container__product-price">
                                550.000
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
                                src="https://tamshoppe.vn/Thumb/Web/Resources/Uploaded/2/images/san-pham/Party/set-trang-tri-sinh-nhat-chu-hpbd-ngoi-sao-vang-bac-new_w400_h300.jpg"
                                alt=""
                            />
                            <p className="section1-list-hot-container__product-name">
                                Set bóng sinh nhật HPBD ngôi sao
                            </p>
                            <p className="section1-list-hot-container__product-price">
                                145.000
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