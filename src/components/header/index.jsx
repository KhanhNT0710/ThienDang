import React, { useState } from "react";
import logo from './logo.png'
import { Button, Dropdown, Form, Input, Menu } from "antd";
import "./style.scss"
import { BarsOutlined, FacebookOutlined, MailOutlined, PhoneOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Link, Route, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/user/userSlice";
import PostFilterForm from "../PostFilterForm";
import { actFetchAllProducts, setNewPage, setSearchKey } from "../../redux/features/product/productSlice";

const HeaderComponent = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const { isLogin, userInfo } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const searchKey = useSelector(state => state.product.searchKey)
    const pagination = useSelector(state => state.product.pagination)
    const [isShowMenuMobile, setIsShowMenuMobile] =
        useState(false);
    const handleRedirectToCartPage = () => {
        navigate(ROUTES.CART_PAGE);
    };
    const handleSearch = (event) => {
        event.preventDefault()
        dispatch(actFetchAllProducts({
            _page: 1,
            _limit: pagination.limitPerPage,
            q: searchKey

        }))
        dispatch(setNewPage(1))
    }

    const handleFilterChange = (newFilter) => {
        console.log(newFilter, 'newFilter');
    }
    const { carts } = useSelector((state) => state.cart);
    const handleToggleShowMenu = () => {
        setIsShowMenuMobile(!isShowMenuMobile);
    };
    const handleToggleNavBar = () => {
        setIsToggle(!isToggle);
    };
    const items = [
        {
            key: "1",
            label: <Link to={ROUTES.LOGIN_PAGE}>Login</Link>,
        },
        {
            type: "divider",
        },
        {
            key: "2",
            label: <Link to={ROUTES.REGISTER_PAGE}>Register</Link>,
        },
    ];
    const itemsLoginSuccess = [
        {
            key: "1",
            label: <Link to={ROUTES.USER_PROFILE_PAGE}>My Profile</Link>,
        },

        {
            type: "divider",
        },
        {
            key: "2",
            label: (
                <Link to={ROUTES.USER_PURCHASE_HISTORY_PAGE}>Purchase History</Link>
            ),
        },
        {
            type: "divider",
        },
        {
            key: "3",
            label: (
                <Button
                    onClick={() => {
                        dispatch(logout());
                        navigate(ROUTES.HOME_PAGE);
                    }}
                >
                    Logout
                </Button>
            ),
        },
    ];

    return (
        <div className="header-container">
            <div className="header-container-top-header">
                <div className="header-container-top-header__title">Yi Decor - Trang trí góc nhà</div>
                <div className="header-container-top-header__contact">
                    <a href="/"><FacebookOutlined /></a>
                    <a href="/"><MailOutlined /></a>
                    <a href="/"><PhoneOutlined /></a>
                </div>
            </div>
            <div className="header-container-menu-bar row d-flex">
                <div className="header-container-menu-bar__logo ">
                    <Link className="header-container-menu-bar__logo__link" to={ROUTES.HOME_PAGE}><img src={logo} alt="logo" /></Link>

                </div>
                <form className="header-container-menu-bar__search" >
                    <PostFilterForm onSubmit={handleFilterChange} />
                    <Button className="header-container-menu-bar__search-btn" type="submit" htmlType="submit">
                        <SearchOutlined />
                    </Button>
                </form>
                <div className="header-container-menu-bar__account" >
                    <div className="header-container-menu-bar__account-cart" onClick={handleRedirectToCartPage}>
                        {!!carts.length && (
                            <div className="header-container-menu-bar__account-cart-shoppingCartCount">
                                <p>{carts.length}</p>
                            </div>
                        )}
                        <ShoppingCartOutlined />
                    </div>
                    {!isLogin && (
                        <div className="header-left__loginRegisterGrp">
                            <div className="header-left__icon">
                                <Dropdown menu={{ items }} placement="bottomLeft">
                                    <UserOutlined />

                                </Dropdown>
                            </div>
                        </div>
                    )}
                    {isLogin && (
                        <div className="header-left__user-grp">
                            <div className="header-left__user-avatar">
                                <Dropdown
                                    menu={{ items: itemsLoginSuccess }}
                                    trigger={"click"}
                                    placement="bottomLeft"
                                >
                                    {userInfo?.avatarURL ? (
                                        <div className="header-left__avatar-user">
                                            <img src={userInfo?.avatarURL} alt="" />
                                        </div>
                                    ) : (
                                        <UserOutlined />
                                    )}

                                </Dropdown>
                            </div>
                            <div className="header-left__user-name">
                                <p>Hello {userInfo?.fullName}</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <div style={{ backgroundColor: "#15a69d" }}>
                <div className="header-container-nav" style={{ maxWidth: '968px', margin: '0 auto' }}>
                    <div className="header-navBar">

                        <div
                            className={`header-navBar__list-grp ${isToggle ? "header-navBar__list-grp-show" : ""
                                }`}
                        >
                            <ul className="header-navBar__list">
                                <li className="header-navBar__listItem header-navBar__shopItem">
                                    <div className="header-navBar__shopItem--title">
                                        <Link to={ROUTES.PRODUCT_PAGE}>
                                            <BarsOutlined onClick={handleToggleShowMenu} />
                                            <span onClick={handleToggleNavBar}>DANH MỤC</span>
                                            <div className="header-navBar__btnShow"></div>
                                        </Link>
                                    </div>
                                    <ul className="header-navBar__subNavProduct" >
                                        <li className="header-navBar__subNavProduct-item">
                                            <span>Trang trí để bàn</span>
                                        </li>
                                        <li className="header-navBar__subNavProduct-item">
                                            <span>Trang trí dạng treo</span>
                                        </li>
                                        <li className="header-navBar__subNavProduct-item"  >
                                            <span> Đèn xông - Tinh dầu</span>
                                        </li>
                                        <li className="header-navBar__subNavProduct-item">
                                            <span>Đèn led trang trí</span>
                                        </li>
                                        <li className="header-navBar__subNavProduct-item"   >
                                            <span>Trang trí sinh nhật</span>
                                        </li>
                                        <li className="header-navBar__subNavProduct-item" >
                                            <span> Đồ Hand Made</span>
                                        </li>
                                        <li className="header-navBar__subNavProduct-item" >
                                            <span>Đồ phong thuỷ</span>
                                        </li>
                                        <li className="header-navBar__subNavProduct-item"  >
                                            <span> Quà tặng</span>
                                        </li>
                                    </ul>
                                </li>
                                <li className="header-navBar__listItem">
                                    <Link to={ROUTES.PRODUCT_PAGE}>
                                        <span >SẢN PHẨM</span>
                                    </Link>
                                </li>
                                <li className="header-navBar__listItem">
                                    <Link to={ROUTES.ABOUT_US_PAGE}>
                                        <span >GIỚI THIỆU</span>
                                    </Link>
                                </li>
                                <li className="header-navBar__listItem">
                                    <Link to={ROUTES.BLOG_PAGE}>
                                        <span >BLOG</span>
                                    </Link>
                                </li>
                                <li className="header-navBar__listItem">
                                    <Link to={ROUTES.PRODUCT_PAGE}>
                                        <span >LIÊN HỆ</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderComponent