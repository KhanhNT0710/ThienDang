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
                <div class="phone_mobi">
                    <ul>
                        <li >
                            <a class="blink_me" href="tel:0988015093" >
                                <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                                <span>Gọi điện</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://m.me/denlongthiendang" >
                                <svg xmlns="https://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h16.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h5.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h8.8418c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-8v-14h3.82031l1.40039,-7h-5.2207v-2c0,-0.55749 0.05305,-0.60107 0.24023,-0.72266c0.18718,-0.12159 0.76559,-0.27734 1.75977,-0.27734h3v-5.63086l-0.57031,-0.27149c0,0 -2.29704,-1.09766 -5.42969,-1.09766c-2.25,0 -4.09841,0.89645 -5.28125,2.375c-1.18284,1.47855 -1.71875,3.45833 -1.71875,5.625v2h-3v7h3v14h-16c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM32,15c2.07906,0 3.38736,0.45846 4,0.70117v2.29883h-1c-1.15082,0 -2.07304,0.0952 -2.84961,0.59961c-0.77656,0.50441 -1.15039,1.46188 -1.15039,2.40039v4h4.7793l-0.59961,3h-4.17969v16h-4v-16h-3v-3h3v-4c0,-1.83333 0.46409,-3.35355 1.28125,-4.375c0.81716,-1.02145 1.96875,-1.625 3.71875,-1.625z"></path></g></g>
                                </svg><span>Messenger</span></a></li>
                        <li >
                            <a href="https://zalo.me/0988015093" >
                                <svg xmlns="https://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h6.57617c-3.45813,3.59811 -5.57617,8.32363 -5.57617,13.5c0,5.36135 2.26815,10.2486 5.94922,13.88867c-0.13381,-0.12748 0.03942,0.09421 0.05664,0.48633c0.01778,0.40477 -0.04317,0.96092 -0.20703,1.51172c-0.32772,1.1016 -1.01318,2.11702 -2.11523,2.48438c-0.43042,0.14344 -0.71036,0.55864 -0.68195,1.01144c0.02841,0.4528 0.35807,0.82975 0.80304,0.91825c2.7597,0.55194 4.71177,-0.27897 6.15039,-0.93945c1.43862,-0.66048 2.21596,-1.10495 3.66992,-0.51758c0.0039,0.00133 0.0078,0.00263 0.01172,0.00391c2.72232,1.0641 5.71952,1.65234 8.86328,1.65234c4.19732,0 8.13117,-1.04883 11.5,-2.87695v3.87695c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM18.49609,6h22.50391c1.66848,0 3,1.33152 3,3v25.80469c-3.27311,2.00803 -7.22536,3.19531 -11.5,3.19531c-2.88985,0 -5.63635,-0.54059 -8.125,-1.51172c-2.11303,-0.85363 -3.83428,-0.09708 -5.25391,0.55469c-0.76884,0.35298 -1.52739,0.64642 -2.38477,0.80859c0.42417,-0.6048 0.78701,-1.25079 0.97852,-1.89453c0.22627,-0.76057 0.31825,-1.50535 0.28906,-2.16992c-0.02909,-0.66227 -0.08696,-1.26881 -0.64648,-1.81836l-0.00195,-0.00195c-3.33854,-3.30144 -5.35547,-7.66805 -5.35547,-12.4668c0,-5.32259 2.48618,-10.11237 6.49609,-13.5zM32.98438,14.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v9c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-9c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM18,16c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h3.19727l-4.04492,6.4707c-0.19219,0.30819 -0.20218,0.69636 -0.0261,1.01403c0.17608,0.31767 0.51055,0.51491 0.87376,0.51526h5c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-3.19727l4.04492,-6.4707c0.19219,-0.30819 0.20218,-0.69636 0.0261,-1.01403c-0.17608,-0.31767 -0.51055,-0.51491 -0.87376,-0.51526zM29.98438,18.98633c-0.3331,0.00588 -0.64141,0.17724 -0.82227,0.45703c-0.49759,-0.27324 -1.05865,-0.44336 -1.66211,-0.44336c-1.92115,0 -3.5,1.57885 -3.5,3.5c0,1.92115 1.57885,3.5 3.5,3.5c0.60285,0 1.16293,-0.17064 1.66016,-0.44336c0.24207,0.37439 0.70272,0.54333 1.12945,0.41422c0.42673,-0.12911 0.71646,-0.52508 0.71039,-0.97087v-2.5v-2.5c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM38.5,19c-1.92115,0 -3.5,1.57885 -3.5,3.5c0,1.92115 1.57885,3.5 3.5,3.5c1.92115,0 3.5,-1.57885 3.5,-3.5c0,-1.92115 -1.57885,-3.5 -3.5,-3.5zM27.5,21c0.84027,0 1.5,0.65973 1.5,1.5c0,0.84027 -0.65973,1.5 -1.5,1.5c-0.84027,0 -1.5,-0.65973 -1.5,-1.5c0,-0.84027 0.65973,-1.5 1.5,-1.5zM38.5,21c0.84027,0 1.5,0.65973 1.5,1.5c0,0.84027 -0.65973,1.5 -1.5,1.5c-0.84027,0 -1.5,-0.65973 -1.5,-1.5c0,-0.84027 0.65973,-1.5 1.5,-1.5z"></path></g>
                                    </g>
                                </svg>
                                <span>ZaLo</span></a>
                        </li>
                        <li >
                            <a href="https://maps.app.goo.gl/BSec4jZepiQVDknx9" >
                                <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                                <span>Chỉ đường</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <Col className="footer-item" xs={24} sm={12} md={8}>
                    <div className="footer-item__title">
                        <h3>VỀ CHÚNG TÔI</h3>
                    </div>
                    <div className="footer-item__description-grp">
                        <p className="footer-item__description">Bảo tồn làng nghề - giữ gìn tinh hoa.</p>
                        <p className="footer-item__description">Bồng Lai - Điện Minh - Điện Bàn - Quảng Nam</p>
                        <p className="footer-item__description"><a target="_blank" href="https://zalo.me/0988015093">Điện thoại: 0988015093</a></p>
                        <p className="footer-item__description"><a target="_blank" href="https://maps.app.goo.gl/BSec4jZepiQVDknx9">Google Map</a></p>
                        <p className="footer-item__description"><a href="mailto:denlongthiendang@gmail.com" title="denlongthiendang@gmail.com">denlongthiendang@gmail.com</a></p>
                    </div>
                    <div className="footer-item__bottom">
                        <FacebookOutlined />
                        <InstagramOutlined />
                        <TwitterOutlined />
                    </div>
                    <div className=" footer-item__bottom"><p> <CopyrightOutlined /> &nbsp; KhanhNT</p></div>
                </Col>

                <Col className="footer-item mobile_none" xs={24} sm={12} md={8}>
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

                <Col className="footer-item_social" xs={24} sm={12} md={8}>
                    <iframe width="380" height="200" src="https://www.youtube.com/embed/5kcWllSaGWY?si=tGIMIFXpXJNAL67c"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>

                </Col>
            </Row >
        </div >
    );
};

export default FooterComponent;
