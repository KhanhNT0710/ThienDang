import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import { Button, Dropdown, Form, Input, Menu } from "antd";
import "./style.scss";
import {
  BarsOutlined,
  CaretDownOutlined,
  FacebookOutlined,
  MailOutlined,
  MenuOutlined,
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
import axios from "axios";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);
  const { isLogin, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleFilterChangeInput = (newFilter) => {};
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // State to toggle mobile menu
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleToggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
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
      label: <Link to={ROUTES.MANA_PRODUCT_PAGE}>Thêm sản phẩm</Link>,
    },

    {
      type: "divider",
    },

    {
      type: "divider",
    },
    {
      key: "2",
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
  const [categories, setCategories] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    // Hàm lấy danh sách danh mục
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://media.denlongthiendang.com/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [refresh]);
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
        <div
          className="header-container-menu-bar__logo "
          style={{ alignSelf: "center" }}
        >
          <Link
            className="header-container-menu-bar__logo__link"
            to={ROUTES.HOME_PAGE}
          >
            <img src={`${API_URL}/uploads/logo-header.png`} alt="logo" />
          </Link>
        </div>
        {/* Mobile menu toggle icon */}
        <div className="header-container-menu-bar__toggle-icon mobile-show toogle-hiden">
          <MenuOutlined
            style={{ fontSize: "30px" }}
            onClick={handleToggleMobileNav}
          />
        </div>
        {/* Mobile-only navigation menu */}
        {isMobileNavOpen && (
          <div className="header-container-nav-mobile">
            <ul className="header-container-nav-mobile__list">
              <li className="header-container-nav-mobile__item">
                <Link to={ROUTES.HOME_PAGE} onClick={handleToggleMobileNav}>
                  Trang chủ
                </Link>
              </li>
              <li className="header-container-nav-mobile__item">
                <div>
                  <Link onClick={toggleSubMenu}>
                    Danh Mục
                    <CaretDownOutlined />
                  </Link>
                </div>
                {isSubMenuOpen && (
                  <ul className="header-container-nav-mobile__list">
                    {categories.map((category) => (
                      <li
                        key={category.id}
                        className="header-container-nav-mobile__item__sub"
                        onClick={() => handleRedirectToProductPage(category.id)}
                      >
                        <Link onClick={handleToggleMobileNav}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="header-container-nav-mobile__item">
                <Link to={ROUTES.ABOUT_US_PAGE} onClick={handleToggleMobileNav}>
                  Giới Thiệu
                </Link>
              </li>
              <li className="header-container-nav-mobile__item">
                <Link to={ROUTES.BLOG_PAGE} onClick={handleToggleMobileNav}>
                  Không gian trang trí
                </Link>
              </li>
              {/* <li className="header-container-nav-mobile__item">
                <Link to={ROUTES.BLOG_PAGE} onClick={handleToggleMobileNav}>
                  Trải nghiệm làm đèn lồng
                </Link>
              </li> */}
              <li className="header-container-nav-mobile__item">
                <a href="tel:+84988015093" onClick={handleToggleMobileNav}>
                  Liên Hệ
                </a>
              </li>
              <li className="header-container-nav-mobile__item">
                <div className="header-left" style={{ color: "white" }}>
                  {!isLogin && (
                    <Link
                      to={ROUTES.LOGIN_PAGE}
                      onClick={handleToggleMobileNav}
                    >
                      <UserOutlined />
                    </Link>
                  )}
                  {isLogin && (
                    <Link
                      to={ROUTES.HOME_PAGE}
                      onClick={() => {
                        dispatch(logout());
                        handleToggleMobileNav();
                      }}
                    >
                      Đăng xuất
                    </Link>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}
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
              className={`header-navBar__list-grp ${
                isToggle ? "header-navBar__list-grp-show" : ""
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
                    {categories.map((category) => (
                      <li
                        key={category.id}
                        className="header-navBar__subNavProduct-item"
                        onClick={handleRedirectToProductPage}
                      >
                        <span>{category.name}</span>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="header-navBar__listItem">
                  <Link to={ROUTES.ABOUT_US_PAGE}>
                    <span>GIỚI THIỆU</span>
                  </Link>
                </li>
                <li className="header-navBar__listItem">
                  <Link to={ROUTES.BLOG_PAGE}>
                    <span>Không gian trang trí</span>
                  </Link>
                </li>
                {/* <li className="header-navBar__listItem">
                  <Link to={ROUTES.BLOG_PAGE}>
                    <span>Trải nghiệm làm đèn lồng</span>
                  </Link>
                </li> */}
                <li className="header-navBar__listItem">
                  <Link to={ROUTES.TRAVEL_PAGE}>
                    <span>Trải nghiệm làm đèn lồng</span>
                  </Link>
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
                      className="drop-login"
                      menu={{ items: itemsLoginSuccess }}
                      trigger={"click"}
                      placement="bottomLeft"
                    >
                      {userInfo?.avatarURL ? (
                        <div className="header-left__avatar-user">
                          <img src={userInfo?.avatarURL} alt="" />
                        </div>
                      ) : (
                        <UserOutlined
                          style={{ fontSize: "18px" }}
                          color="white"
                        />
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
