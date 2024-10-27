import React from "react";
import "./style.scss";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const { id_product, urls, name, category, style } = props.product;

  const formatNumber = (num) => {
    let numString = "";
    while (num > 0) {
      let div = num % 1000;
      num = Math.floor(num / 1000);
      if (num !== 0) {
        if (div < 10) {
          div = "00" + div;
        } else if (div < 100) {
          div = "0" + div;
        }
        numString = "." + div + numString;
      } else {
        numString = div + numString;
      }
    }
    return numString;
  };
  console.log(id_product, "id_product");

  const handleRedirectToDetailProductPage = () => {
    navigate(generatePath(ROUTES.DETAIL_PRODUCT_PAGE, { productId: id_product }));
  };

  return (
    <div className="product-card-wrapper">
      <div className="product-card">
        <div className="product-card__img">
          <img src={urls[0]} alt={name}
            onClick={handleRedirectToDetailProductPage}
          />
          <div className="button-shop">
            <button>Xem ngay</button>
          </div>
        </div>
        <div className="product-card__type-jewelry">
          <span>{category}</span>
        </div>
        <div
          className="product-card__name"
          onClick={handleRedirectToDetailProductPage}
        >
          <h4>{name}</h4>
        </div>
        {style && (
          <div className="product-card__price">
            <span>{style}</span>
          </div>
        )}
        <div className="product-card__price">
          <p>Giá: Liên hệ</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
