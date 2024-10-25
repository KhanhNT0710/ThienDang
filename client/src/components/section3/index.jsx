import React from 'react'
import { Row, Col } from 'antd'
import './style.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import DynamicCarousel from '../CarouselProduct'

const Section3 = () => {
    return (
        <div className='section3-list-hot-container'>
            <div className='section3-list-hot-container__title'>
                <Link className='section3-list-hot-container__title-link' to={ROUTES.PRODUCT_PAGE}><h3>SẢN PHẨM NỔI BẬT</h3></Link>

            </div>
            <div className='section3-list-hot-container__product-hot-grp'>
                <Row className='section3-list-hot-container__list-product'>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={4}
                    >
                        <div>
                            <img
                                src="https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/bai-viet/do-trang-tri-ban-lam-viec-voi-cay-xanh-1.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                        </div>
                        <div>
                            <p>ĐÈN LỒNG TRUYỀN THỐNG</p>
                        </div>
                    </Col>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={4}
                    >
                        <div>
                            <img
                                src="https://cdn.chonongsanonline.com/uploads/all/CWXZfpyzHfFA9bCjYEVcYEuKjc9FNf0b1MbWZ4Dt.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                        </div>
                        <div><p>LỒNG ĐÈN KHUNG SẮT</p></div>

                    </Col>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={4}
                    >
                        <div>
                            <img
                                src="https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/danh-muc-noi-bat/may-khuech-tan-tinh-dau-phun-khoi-sieu-am-khu-khuan6%20copy.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                        </div>
                        <div>
                            <p>MẸT VẼ TRANH</p>
                        </div>
                    </Col>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={4}
                    >
                        <div>
                            <img
                                src="https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/danh-muc-noi-bat/hop-den-fairy-light-mau-vang-am%20(10)%20copy.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                        </div>
                        <div><p>KHÔNG GIAN TRANG TRÍ</p></div>
                    </Col>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={4}
                    >
                        <div>
                            <img
                                src="https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/danh-muc-noi-bat/hop-den-fairy-light-mau-vang-am%20(10)%20copy.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                        </div>
                        <div><p>KHÔNG GIAN TRANG TRÍ</p></div>
                    </Col>
                    <Col className='section3-list-hot-container__product'
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={4}
                    >
                        <div>
                            <img
                                src="https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/danh-muc-noi-bat/hop-den-fairy-light-mau-vang-am%20(10)%20copy.jpg"
                                alt=""
                            />
                            <span className='section3-list-hot-container__product__quickview'>Xem Thêm</span>
                        </div>
                        <div><p>KHÔNG GIAN TRANG TRÍ</p></div>
                    </Col>

                </Row>

            </div>
        </div>
    )
}
export default Section3