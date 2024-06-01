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
                        <h5 className="section2-left__title">CÁCH DECOR PHÒNG TRỌ ĐẸP NHƯ CĂN HỘ MINI VỚI GIÁ SINH VIÊN </h5>
                        <p className="section2-left__description">
                            Đối với nhiều người đi học và đi làm xa, phòng trọ giống như ngôi nhà thứ 2. Đây là nơi để mọi người trở về sau một ngày mệt mỏi và tái tạo năng lượng cho ngày mới. Nhưng không phải ai cũng có đủ thời gian và kinh phí để trang hoàng lại nơi ở này. Hôm nay, Yi Decor sẽ gợi ý cho bạn những tips nhỏ giúp decor phòng trọ đẹp như căn hộ mini với giá sinh viên!
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
                            src="https://s.meta.com.vn/img/thumb.ashx/Data/image/2020/11/24/mau-decor-trang-tri-phong-tro-sinh-vien-3.png"
                            alt=""
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Section2;
