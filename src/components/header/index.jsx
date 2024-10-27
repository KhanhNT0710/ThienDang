import React, { useState } from "react";
import logo from "./logo.png";
import { Button, Dropdown, Form, Input, Menu } from "antd";
import "./style.scss";
import {
  BarsOutlined,
  FacebookOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, Route, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/user/userSlice";
import PostFilterForm from "../PostFilterForm";
import { API_URL } from "../../apis/api";
import {
  actFetchAllProducts,
  setNewPage,
  setSearchKey,
} from "../../redux/features/product/productSlice";
import { useTranslation } from "react-i18next";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);
  const { isLogin, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleFilterChangeInput = (newFilter) => {
  };
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);
  const handleRedirectToCartPage = () => {
    navigate(ROUTES.CART_PAGE);
  };
  const handleRedirectToProductPage = () => {
    navigate(ROUTES.PRODUCT_PAGE);
  };

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
      {/* <div className="header-container-top-header">
                <div className="header-container-top-header__title">Đèn Lồng Thiên Đăng </div>
                <div className="header-container-top-header__contact">
                    <a href="/"><FacebookOutlined /></a>
                    <a href="/"><MailOutlined /></a>
                    <a href="tel:+84123456789"><PhoneOutlined /></a>
                </div>
            </div> */}
      <div className="header-container-menu-bar row d-flex">
        <div className="header-container-menu-bar__logo " style={{ alignSelf: "center" }}>
          <Link
            className="header-container-menu-bar__logo__link"
            to={ROUTES.HOME_PAGE}
          >
            <img
              src={`${API_URL}/den/logo/slogan.png`}
              alt="logo"
            />
          </Link>
        </div>

        <div className="header-container-menu-bar__search mobile_none">
          <form className="list-product__search">
            <PostFilterForm onSubmit={handleFilterChangeInput} />
            <Button
              className="list-product__search-btn mobile_none"
              type="submit"
              htmlType="submit"
            >
              <SearchOutlined />
            </Button>
          </form>
        </div>
      </div>
      <div className="mobile_none" style={{ backgroundColor: "brown" }}>
        <div
          className="header-container-nav"
          style={{ maxWidth: "900px", margin: "0 auto" }}
        >
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
                  <ul className="header-navBar__subNavProduct">
                    <li
                      className="header-navBar__subNavProduct-item"
                      onClick={handleRedirectToProductPage}
                    >
                      <span>Đèn lồng Hội An</span>
                    </li>
                    <li
                      className="header-navBar__subNavProduct-item"
                      onClick={handleRedirectToProductPage}
                    >
                      <span>Đèn lồng ngoài trời</span>
                    </li>
                    <li
                      className="header-navBar__subNavProduct-item"
                      onClick={handleRedirectToProductPage}
                    >
                      <span>Đèn lồng trong nhà</span>
                    </li>
                    <li
                      className="header-navBar__subNavProduct-item"
                      onClick={handleRedirectToProductPage}
                    >
                      <span>Đèn vải in, vẽ hoạ tiết</span>
                    </li>
                    <li
                      className="header-navBar__subNavProduct-item"
                      onClick={handleRedirectToProductPage}
                    >
                      <span>Đèn truyền thống khung tre</span>
                    </li>
                    <li
                      className="header-navBar__subNavProduct-item"
                      onClick={handleRedirectToProductPage}
                    >
                      <span>Mẹt trang trí</span>
                    </li>
                    <li
                      className="header-navBar__subNavProduct-item"
                      onClick={handleRedirectToProductPage}
                    >
                      <span>Combo yêu thích</span>
                    </li>


                  </ul>
                </li>
                <li className="header-navBar__listItem">
                  <Link to={ROUTES.ABOUT_US_PAGE}>
                    <span>GIỚI THIỆU</span>
                  </Link>
                </li>
                <li className="header-navBar__listItem">
                  <Link to={ROUTES.BLOG_PAGE}>
                    <span>BLOG</span>
                  </Link>
                </li>
                <li className="header-navBar__listItem">
                  <a href="tel:0988015093">
                    <span>LIÊN HỆ</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-left" style={{ color: "white" }}>
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
                        <UserOutlined color="white" />
                      )}
                    </Dropdown>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
