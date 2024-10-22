import React from "react";
import { Button, Col, Row } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const Section2 = () => {
    const navigate = useNavigate();

    const handleRedirectToProductPage = () => {
        navigate(ROUTES.ABOUT_US_PAGE);
    };

    return (
        <div className="section2-wrapper">
            <Row className="section2-container">
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div className="section2-left">
                        <h5 className="section2-left__title">Đèn Lồng: Ánh Sáng của Văn Hóa và Truyền Thống</h5>
                        <p className="section2-left__description">
                            Treo đèn lồng là một phong tục lâu đời và giàu ý nghĩa ở nhiều nền văn hóa châu Á, đặc biệt là ở Trung Quốc, Nhật Bản và Việt Nam. Đèn lồng không chỉ mang lại ánh sáng vật lý mà còn chứa đựng nhiều giá trị tinh thần và văn hóa sâu sắc. Bài viết này sẽ khám phá các khía cạnh ý nghĩa của việc treo đèn lồng và cách chúng đã góp phần vào việc bảo tồn và truyền bá những giá trị văn hóa truyền thống.
                        </p>
                        <div className="section2-left__btn-show">
                            <Button onClick={handleRedirectToProductPage}>ĐỌC TIẾP</Button>
                        </div>
                    </div>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div className="section2-right">
                        <img
                            className="section2-right__img"
                            src="http://denlongthiendang.com/den/slide/5.png"
                            alt=""
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Section2;
