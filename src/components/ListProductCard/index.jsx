import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Checkbox, Col, Pagination, Radio, Row, Select } from "antd";
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

      <aside className="list-product__filter">
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
        <div className="list-product__filter-vote">
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
        <div className="list-product__filter-vote">
          <h4>PHÂN LOẠI</h4>
          <ul className="">
            <Radio.Group onChange={handleFilterCategory} value={filterFormValue.category}  >
              <li>
                <Radio value={"Trang Trí Để Bàn"}  >Trang Trí Để Bàn</Radio>
              </li>
              <li>
                <Radio value={"Trang Trí Dạng Treo"} >Trang Trí Dạng Treo</Radio>
              </li>
              <li>
                <Radio value={"Đèn Xông Tinh Dầu"} >Đèn Xông Tinh Dầu</Radio>
              </li>
              <li>
                <Radio value={"Đèn Led Trang Trí"} > Đèn Led Trang Trí</Radio>
              </li>
              <li>
                <Radio value={"Trang Trí Sinh Nhật"} > Trang Trí Sinh Nhật</Radio>
              </li>
              <li>
                <Radio value={"Đồ Hand Made"} > Đồ Hand Made</Radio>
              </li>
              <li>
                <Radio value={"Đồ Phong Thuỷ"} > Đồ Phong Thuỷ</Radio>
              </li>
              <li>
                <Radio value={"Quà Tặng"} > Quà Tặng</Radio>
              </li>
            </Radio.Group>
          </ul>
        </div>
        <div className="list-product__filter-grp">

        </div>
        <button onClick={() => {
          dispatch(clearAllFilter());
          setFilterFormValue({
            saleCount: '',
            starRank: '',
            price: ''
          })
        }}>Clear</button>
      </aside>
      <div className="list-product__content">
        <div className="list-product__content-items">
          <Select
            defaultValue="Sắp xếp theo:"
            style={{
              width: 150,
            }}
            onChange={handleFilterArrange}
            options={[
              {
                value: "Name: A-Z",
                label: "Name: A-Z",
              },
              {
                value: "Name: Z-A",
                label: "Name: Z-A",
              },
              {
                value: "Price: Low to High",
                label: "Price: Low to High",
              },
              {
                value: "Price: High to Low",
                label: "Price: High to Low",
              },
            ]}
          />
          <Row gutter={16}>{renderProducts(products)}</Row>
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
