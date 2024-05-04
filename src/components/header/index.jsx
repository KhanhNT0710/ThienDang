import React, { useState } from "react";
import logo from './logo.png'
import { Button, Form, Input, Menu } from "antd";
import "./style.scss"
import { BarsOutlined, FacebookOutlined, MailOutlined, PhoneOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const items = [
    {
        label: 'DANH MỤC',
        key: 'danh muc',
        icon: <BarsOutlined />,
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'Trang trí để bàn',
                        key: 'setting:1',
                    },
                    {
                        label: 'Trang trí dạng treo',
                        key: 'setting:2',
                    },
                    {
                        label: 'Đèn xông - Tinh dầu',
                        key: 'setting:3',
                    },
                    {
                        label: 'Đèn led trang trí',
                        key: 'setting:4',
                    },
                    {
                        label: 'Trang trí sinh nhật',
                        key: 'setting:5',
                    },
                    {
                        label: 'Đồ Hand Made',
                        key: 'setting:6',
                    },
                    {
                        label: 'Đồ phong thuỷ',
                        key: 'setting:7',
                    },
                    {
                        label: 'Quà tặng',
                        key: 'setting:8',
                    },
                ],
            },

        ],
    },
    {
        label: 'SẢN PHẨM',
        key: 'san pham',
    },
    {
        label: 'GIỚI THIỆU',
        key: 'gioi thieu',

    },
    {
        label: 'BLOG',
        key: 'blog',
    },
    {
        key: 'lien he',
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                LIÊN HỆ
            </a>
        ),
    },
];
const HeaderComponent = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <div className="container">
            <div className="container-top-header">
                <div className="container-top-header__title">Yi Decor - Trang trí góc nhà</div>
                <div className="container-top-header__contact">
                    <a href="/"><FacebookOutlined /></a>
                    <a href="/"><MailOutlined /></a>
                    <a href="/"><PhoneOutlined /></a>
                </div>
            </div>
            <div className="container-menu-bar row d-flex">
                <div className="container-menu-bar__logo ">
                    <img src={logo} alt="logo" />
                </div>
                <div className="container-menu-bar__search">
                    <Input placeholder="Bạn muốn mua gì" />
                    <Button type="primary" htmlType="submit">
                        <SearchOutlined />
                    </Button>

                </div>
                <div className="container-menu-bar__account" >
                    <a href="/"><ShoppingCartOutlined /></a>
                    <a href="/" className="container-menu-bar__account-member" >
                        <i><UserOutlined /></i>
                        <span>Tài khoản</span>
                    </a>
                </div>
            </div>
            <div className="container-nav">
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ backgroundColor: "#15a69d" }} />

            </div>

        </div>
    )
}
export default HeaderComponent