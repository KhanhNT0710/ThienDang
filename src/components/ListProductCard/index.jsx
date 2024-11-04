import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Button, Col, Input, Menu, Pagination, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchAllProducts,
  clearAllFilter,
  filterArrange,
  setFilterPrice,
  setFilterEvaluate,
  setNewPage,
  setFilterCategory,
} from "../../redux/features/product/productSlice";
import SpinFC from "antd/es/spin";
import { CaretDownOutlined, DownCircleOutlined, DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined, UpCircleOutlined, UpOutlined } from "@ant-design/icons";
import PostFilterForm from "../PostFilterForm";
import "./style.scss";

const ListProductCard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [search, setSearch] = useState("");

  const [currentCategory, setCurrentCategory] = useState(null);
  const [filterFormValue, setFilterFormValue] = useState({
    price: '',
    starRank: '',
    category: ''
  });
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu state
  };
  const dispatch = useDispatch();
  const { isLoading, products, pagination, searchKey, params } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(
      actFetchAllProducts({
        _page: 1,
        _limit: pagination.limitPerPage,
        q: params.search,
        ...params,
      })
    );
    return () => {
      dispatch(setNewPage(1));
    };
  }, []);

  const handleChangePage = (newPage) => {
    dispatch(setNewPage(newPage));
    dispatch(
      actFetchAllProducts({
        _page: newPage,
        _limit: pagination.limitPerPage,
        q: searchKey,
        ...params,
      })
    );
  };

  useEffect(() => {
    dispatch(
      actFetchAllProducts({
        _page: 1,
        _limit: pagination.limitPerPage,
        q: searchKey,
        ...params,
      })
    );
  }, [searchKey]);

  const handleFilterChange = (event) => {
    // Kiểm tra nếu `event.target` tồn tại trước khi truy cập vào `event.target.value`
    if (event?.target?.value !== undefined) {
      dispatch(setFilterPrice(event.target.value));
      setFilterFormValue({
        ...filterFormValue,
        price: event.target.value
      });
    } else {
      console.warn("Không thể đọc giá trị của event.target.value");
    }
  };


  const handleFilterEvaluate = (event) => {
    dispatch(setFilterEvaluate(event.target.value));
    setFilterFormValue({
      ...filterFormValue,
      starRank: event.target.value
    });
  };

  const handleFilterArrange = (valueFilter) => {
    dispatch(filterArrange(valueFilter));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(actFetchAllProducts({
      _page: 1,
      _limit: pagination.limitPerPage,
      q: searchKey
    }));
    dispatch(setNewPage(1));
  };

  const { filter } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(
      actFetchAllProducts({
        _page: 1,
        _limit: pagination.limitPerPage,
        q: searchKey,
        ...params,
      })
    );
  }, [filter]);

  if (isLoading) {
    return <SpinFC />;
  }

  const handleClickMenu = (e) => {
    setCurrentCategory(e.key);
    setFilterFormValue({ ...filterFormValue, category: e.key });
    dispatch(setFilterCategory(e.key));
  };

  const getUniqueCategories = () => {
    const categories = products.map((product) => product.category).filter(Boolean);
    return [...new Set(categories)];
  };

  const filteredProducts = filterFormValue.category
    ? products.filter((product) => product.category === filterFormValue.category)
    : products;


  return (
    <div className="list-product">

      <div className="list-product__filter">
        <div className="list-product__filter-category">
          <h4 onClick={toggleMenu} style={{ cursor: 'pointer', width: "max-content" }}>PHÂN LOẠI SẢN PHẨM
            {isMenuOpen ? < UpCircleOutlined style={{ marginLeft: 8 }} /> : < DownCircleOutlined style={{ marginLeft: 8 }} />}

          </h4>
          {isMenuOpen && (
            <Menu
              onClick={handleClickMenu}
              selectedKeys={[currentCategory]}
              mode="inline"
            >
              {getUniqueCategories()?.map((category) => (
                <Menu.Item key={category}>{category}</Menu.Item>
              ))}
            </Menu>
          )}
        </div>
        <button
          className="list-product__filter-btn"
          onClick={() => {
            dispatch(clearAllFilter());
            setCurrentCategory(null);
            setFilterFormValue({
              price: '',
              starRank: '',
              category: ''
            });
          }}
        >
          Xem tất cả
        </button>
      </div>

      <div className="list-product__content">
        <form className="list-product__search" onSubmit={handleSearch}>
          <PostFilterForm onSubmit={handleFilterChange} />
          {/* <Button className="list-product__search-btn" type="submit" htmlType="submit">
            <SearchOutlined />
          </Button> */}
        </form>
        {/* <div className="d-flex">
          <Input
            className="list-product__search respon-h32"
            style={{
              padding: "5px",
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            suffix={<SearchOutlined />}
          />
        </div> */}

        <div className="list-product__content-filter">
          <Select
            defaultValue="Sắp xếp theo:"
            style={{ width: 150 }}
            onChange={handleFilterArrange}
            options={[
              { value: "Name: A-Z", label: "Tên từ A-Z" },
              { value: "Name: Z-A", label: "Tên từ Z-A" },
              { value: "Price: Low to High", label: "Giá thấp tới cao" },
              { value: "Price: High to Low", label: "Giá cao tới thấp" },
            ]}
          />
        </div>

        <div className="list-product__content-items">
          <Row gutter={[16, 16]}>
            {filteredProducts?.map((product) => (
              <Col key={product.id_product} xs={24} sm={12} md={12} lg={12} xl={12}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </div>

        <div className="list-product__content-pagination">
          <Pagination
            pageSize={pagination.limitPerPage}
            current={pagination.currentPage}
            total={pagination.total}
            onChange={handleChangePage}
          />
        </div>
      </div>
    </div>
  );
};

export default ListProductCard;
