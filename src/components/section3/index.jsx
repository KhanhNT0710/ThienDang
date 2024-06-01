import React from 'react'
import { Row, Col } from 'antd'
import './style.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

const Section3 = () => {
    return (
        <div className='section3-list-hot-container'>
            <div className='section3-list-hot-container__title'>
                <Link className='section3-list-hot-container__title-link' to={ROUTES.PRODUCT_PAGE}><h3>DANH MỤC SẢN PHẨM</h3></Link>

            </div>
            <div className='section3-list-hot-container__product-hot-grp'>
                <Row className='section3-list-hot-container__list-product'>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={6}
                    >
                        <a href="">
                            <img
                                src="https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/bai-viet/do-trang-tri-ban-lam-viec-voi-cay-xanh-1.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                            <p>TRANG TRÍ ĐỂ BÀN</p>
                        </a>

                    </Col>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={6}
                    >
                        <a href="">
                            <img
                                src="https://cdn.chonongsanonline.com/uploads/all/CWXZfpyzHfFA9bCjYEVcYEuKjc9FNf0b1MbWZ4Dt.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                            <p>TRANG TRÍ DẠNG TREO</p>
                        </a>
                    </Col>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={6}
                    >
                        <a href="">
                            <img
                                src="https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/danh-muc-noi-bat/may-khuech-tan-tinh-dau-phun-khoi-sieu-am-khu-khuan6%20copy.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                            <p>ĐÈN XÔNG - TNH DẦU</p>
                        </a>

                    </Col>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={6}
                    >
                        <a href="">
                            <img
                                src="https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/danh-muc-noi-bat/hop-den-fairy-light-mau-vang-am%20(10)%20copy.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                            <p>ĐÈN LED TRANG TRÍ</p>
                        </a>

                    </Col>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={6}
                    >
                        <a href="">
                            <img
                                src="https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/danh-muc-noi-bat/bong-bong-chu-happy-birthday-15-copy%20copy.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                            <p>TRANG TRÍ SINH NHẬT</p>
                        </a>

                    </Col>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={6}
                    >
                        <a href="">
                            <img
                                src="https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/danh-muc-noi-bat/cuon-day-thung-handmade%20(7)%20copy.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                            <p>ĐỒ HAND MADE</p>
                        </a>
                    </Col>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={6}
                    >
                        <a href="">
                            <img
                                src="https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/danh-muc-noi-bat/tuong-chu-tieu-trang-tri-dep-don-gian20%20copy.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                            <p>ĐỒ PHONG THUỶ</p>
                        </a>
                    </Col>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={6}
                    >
                        <a href="">
                            <img
                                src="https://tamshoppe.vn/Thumb/Web/Resources/Uploaded/2/images/BLOG/phu-kien-goi-qua-dep-danh-cho-nguoi-co-tam_w400_h300.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                            <p>QUÀ TẶNG</p>
                        </a>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
export default Section3