import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { Select } from "antd/es";
import { Controller } from "react-hook-form";
import { actDeleteProductInCarts } from "../../redux/features/cart/cartSlice";

const YourOrder = (props) => {
  const dispatch = useDispatch();
  const { isPaymentPage, control, errors } = props;
  const { order } = useSelector((state) => state.order);
  const cartsList = isPaymentPage ? order?.carts || [] : JSON.parse(localStorage.getItem("key_carts_list"));

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

  const getTotalMoneyInBill = () => {
    const totalMoneyInBill = cartsList.reduce((total, cart) => {
      return total + parseFloat(cart.price) * parseFloat(cart.quantity);
    }, 0);
    return formatNumber(totalMoneyInBill);
  };

  const handleDeleteProductInYourOrder = (id) => {
    dispatch(actDeleteProductInCarts(id));
  };

  const renderProductInYourOrder = (cartsList) => {
    return cartsList.map((product) => {
      return (
        <React.Fragment key={product.id}>
          <tr>
            <td>
              <img src={product.imgURL} alt="" />
              <p>
                {product.name} × {product.quantity}
              </p>
              <p>Style: {product.style}</p>
              {!!isPaymentPage ? (
                ""
              ) : (
                <p
                  style={{
                    color: "#b37e6b",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDeleteProductInYourOrder(product.id)}
                >
                  Del
                </p>
              )}
            </td>
            <td>
              <h4>{formatNumber(product.price * product.quantity)}</h4>
            </td>
          </tr>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="your-order-container">
      <div className="your-order">
        <div
          className={`${!!isPaymentPage
            ? "your-order__order-detail"
            : "your-order__your-order"
            }`}
        >
          {!!isPaymentPage ? <h3>Order details</h3> : <h3>Đơn hàng của bạn</h3>}
        </div>
        <div
          className={`${!!isPaymentPage
            ? "your-order__order-detail-table-grp"
            : "your-order__your-order-table-grp"
            }`}
        >
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {renderProductInYourOrder(cartsList)}
              <tr>
                <td>
                  <h3>Subtotal</h3>
                </td>
                <td>
                  <h4>{getTotalMoneyInBill()}</h4>
                </td>
              </tr>

              {!isPaymentPage && (
                <tr>
                  <td>
                    <h3>Shipping</h3>
                  </td>
                  <td>
                    <Controller
                      control={control}
                      name="feeShip"
                      render={({ field }) => {
                        return (
                          <Select
                            {...field}
                            allowClear
                            style={{
                              width: 200,
                            }}
                            options={[
                              {
                                value: 0,
                                label: "Normal Shipping - 0đ",
                              },
                              {
                                value: 30000,
                                label: "Fast Shipping - 30.000đ",
                              },
                            ]}
                          />
                        );
                      }}
                    />
                    {!!errors.feeShip?.message && (
                      <p style={{ color: "red", padding: "0px 10px" }}>
                        {errors.feeShip?.message}
                      </p>
                    )}
                  </td>
                </tr>
              )}

              {!isPaymentPage && (
                <tr>
                  <td>
                    <h3>Payment</h3>
                  </td>
                  <td>
                    <Controller
                      control={control}
                      name="payment"
                      render={({ field }) => {
                        return (
                          <Select
                            {...field}
                            allowClear
                            style={{
                              width: 200,
                            }}
                            options={[
                              {
                                value: "Ship COD",
                                label: "Ship COD",
                              },
                              {
                                value: "Direct Bank Transfer",
                                label: "Direct Bank Transfer",
                              },
                            ]}
                          />
                        );
                      }}
                    />
                    {!!errors.payment?.message && (
                      <p style={{ color: "red", padding: "0px 10px" }}>
                        {errors.payment?.message}
                      </p>
                    )}
                  </td>
                </tr>
              )}
              {!!isPaymentPage && (
                <tr>
                  <td>
                    <h3>Payment method</h3>
                  </td>
                  <td>
                    <h3>Credit card payment</h3>
                  </td>
                </tr>
              )}
              <tr>
                <td>
                  <h3>Total</h3>
                </td>
                <td>
                  <h3>{getTotalMoneyInBill()}</h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
