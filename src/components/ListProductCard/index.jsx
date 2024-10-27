import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Button, Col, Pagination, Radio, Row, Select } from "antd";
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
import "./style.scss";
import { SearchOutlined } from "@ant-design/icons";
import PostFilterForm from "../PostFilterForm";

const ListProductCard = () => {
  const [filterFormValue, setFilterFormValue] = useState({
    price: '',
    starRank: '',
    category: ''
  })

  const dispatch = useDispatch();
  const { isLoading, products, pagination, searchKey, params } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    window.scrollTo(0, 0)
    // truyền thêm params pagination
    dispatch(
      actFetchAllProducts({
        _page: 1,
        _limit: pagination.limitPerPage,
        q: params.search,
        // brands: params.brands,
        // search: params.search,
        ...params,
      })
    );
    return () => {
      dispatch(setNewPage(1));
    };
    // eslint-disable-next-line
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
    // eslint-disable-next-line
  }, [searchKey]);

  // filter sp
  const handleFilterChange = async (event) => {
    dispatch(setFilterPrice(event.target.value));
    setFilterFormValue({
      ...filterFormValue,
      price: event.target.value
    });
  };
  const handleFilterEvaluate = async (event) => {
    dispatch(setFilterEvaluate(event.target.value));
    setFilterFormValue({
      ...filterFormValue,
      starRank: event.target.value
    });
  };
  const handleFilterCategory = async (event) => {
    dispatch(setFilterCategory(event.target.value));
    setFilterFormValue({
      ...filterFormValue,
      category: event.target.value
    });
  };
  const handleFilterArrange = async (valueFilter) => {
    dispatch(filterArrange(valueFilter));

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

  const handleFilterChangeInput = (newFilter) => {
  }

  const { filter } = useSelector((state) => state.product);
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(
      actFetchAllProducts({
        _page: 1,
        _limit: pagination.limitPerPage,
        q: searchKey,
        ...params,
      })
    );
    // eslint-disable-next-line
  }, [filter]);

  if (isLoading) {
    return <SpinFC />;
  }

  const renderProducts = (products) => {
    return products.map((product) => {
      return (
        <Col key={product.id} xs={12} sm={8} md={6}>
          <ProductCard product={product} />
        </Col>
      );
    });
  };

  return (
    <div className="list-product">
      <div className="list-product__filter">
        <div className="list-product__filter-category">
          <h4>PHÂN LOẠI</h4>
          <ul className="list-product__filter-radio">
            <Radio.Group onChange={handleFilterCategory} value={filterFormValue.category}  >
              <li>
                <Radio value={"Đèn lồng Hội An"}  >Đèn lồng Hội An</Radio>
              </li>
              <li>
                <Radio value={"Đèn lồng ngoài trời"} >Đèn lồng ngoài trời</Radio>
              </li>
              <li>
                <Radio value={"Đèn lồng trong nhà"} >Đèn lồng trong nhà</Radio>
              </li>
              <li>
                <Radio value={"Đèn vải in, vẽ hoạ tiết"} > Đèn vải in, vẽ hoạ tiết</Radio>
              </li>
              <li>
                <Radio value={"Đèn truyền thống khung tre"} > Đèn truyền thống khung tre</Radio>
              </li>
              <li>
                <Radio value={"Mẹt trang trí"} > Mẹt trang trí</Radio>
              </li>
              <li>
                <Radio value={"Combo yêu thích"} >Combo yêu thích</Radio>
              </li>

            </Radio.Group>
          </ul>
        </div>
        <div className="list-product__filter-price">
          <h4>GIÁ THÀNH</h4>
          <ul className="">
            <Radio.Group onChange={handleFilterChange} value={filterFormValue.price}>
              <li>
                <Radio value={"less than 100.000đ"} > &#60;100.000đ</Radio>
              </li>
              <li>
                <Radio value={"100.000đ - 300.000đ"}  >100.000đ - 300.000đ</Radio>
              </li>
              <li>
                <Radio value={"300.000đ - 500.000đ"} >300.000đ - 500.000đ</Radio>
              </li>
              <li>
                <Radio value={"greater than 500.000đ"} > &#62;500.000đ</Radio>
              </li>
            </Radio.Group>

          </ul>
        </div>
        <div className="list-product__filter-star">
          <h4>ĐÁNH GIÁ</h4>
          <ul className="">
            <Radio.Group onChange={handleFilterEvaluate} value={filterFormValue.starRank} >
              <li>
                <Radio value={"1 sao"}  >1 sao</Radio>
              </li>
              <li>
                <Radio value={"2 sao"}  >2 sao</Radio>
              </li>
              <li>
                <Radio value={"3 sao"}  >3 sao</Radio>
              </li>
              <li>
                <Radio value={"4 sao"}  >4 sao</Radio>
              </li>
              <li>
                <Radio value={"5 sao"}  > 5 sao</Radio>
              </li>
            </Radio.Group>
          </ul>
        </div>

        <div className="list-product__filter-grp">

        </div>
        <button
          className="list-product__filter-btn"
          onClick={() => {
            dispatch(clearAllFilter());
            setFilterFormValue({
              saleCount: '',
              starRank: '',
              price: ''
            })
          }}>Clear</button>
      </div>
      <div className="list-product__content">
        <form className="list-product__search" >
          <PostFilterForm onSubmit={handleFilterChangeInput} />
          <Button className="list-product__search-btn" type="submit" htmlType="submit">
            <SearchOutlined />
          </Button>
        </form>
        <div className="list-product__content-filter" >
          <Select
            defaultValue="Sắp xếp theo:"
            style={{
              width: 150,

            }}
            onChange={handleFilterArrange}
            options={[
              {
                value: "Name: A-Z",
                label: "Tên từ A-Z",
              },
              {
                value: "Name: Z-A",
                label: "Tên từ Z-A",
              },
              {
                value: "Price: Low to High",
                label: "Giá thấp tới cao",
              },
              {
                value: "Price: High to Low",
                label: "Giá cao tới thấp",
              },
            ]}
          />
        </div>

        <div className="list-product__content-items">
          <Row className="list-product__content-items__row" gutter={16} >{renderProducts(products)}</Row>
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
