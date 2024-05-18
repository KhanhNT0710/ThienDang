import {
    TwitterOutlined,
    InstagramOutlined,
    FacebookOutlined,
    CopyrightOutlined,
} from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import React from "react";
import "./style.scss";

const FooterComponent = () => {
    return (
        <div className="footer-wrapper">
            <Row className="footer-container">
                <Col className="footer-item" xs={24} sm={12} md={8}>
                    <div className="footer-item__title">
                        <h3>VỀ CHÚNG TÔI</h3>
                    </div>
                    <div className="footer-item__description-grp">
                        <p className="footer-item__description">Decor và đồ dùng gia đình: Đồ nhà bếp, phòng khách.</p>
                        <p className="footer-item__description">Địa chỉ: 257 Hùng Vương, Thành phố Đà Nẵng, Vietnam</p>
                        <p className="footer-item__description"><a href="tel:0906295703">Điện thoại: 0906295703</a></p>
                        <p className="footer-item__description"><a href="mailto:sales@gocnha.vn" title="sales@gocnha.vn">sales@gocnha.vn</a></p>
                    </div>
                    <div className="footer-item__bottom">
                        <FacebookOutlined />
                        <InstagramOutlined />
                        <TwitterOutlined />
                    </div>
                    <div className=" footer-item__bottom"><p> <CopyrightOutlined /> &nbsp; KhanhNT</p></div>
                </Col>

                <Col className="footer-item" xs={24} sm={12} md={8}>
                    <div className="footer-item__title">
                        <h3>CHÍNH SÁCH</h3>
                    </div>
                    <div className="footer-item__description-grp">
                        <p className="footer-item__description">Chính sách thành viên</p>
                        <p className="footer-item__description">Chính sách đổi trả hàng</p>
                        <p className="footer-item__description">Hướng dẫn thanh toán</p>
                        <p className="footer-item__description">Thiết kế và tư vấn</p>
                        <p className="footer-item__description">FAQ - Các câu hỏi thường gặp</p>
                    </div>
                </Col>

                <Col className="footer-item" xs={24} sm={12} md={8}>
                    <iframe width="465" height="200" src="https://www.youtube.com/embed/jm3cZniR7YI?si=Wv6GmiL5FRYOauq7"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>

                </Col>
            </Row>
        </div >
    );
};

export default FooterComponent;
