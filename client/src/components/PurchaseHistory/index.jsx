import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { actFetchAllPaymentBills } from "../../redux/features/payment/paymentSlice";
import { Button, InputNumber } from "antd";
import CartPurchase from "../CartPurchase";

const PurchaseHistory = () => {
  const dispatch = useDispatch();
  const { paymentBills } = useSelector((state) => state.payment);
  const userInfo = useSelector((state) => state.user.userInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartsInCheckoutBills, setCartsInCheckoutBills] = useState([]);

  useEffect(() => {
    if (!userInfo.id) {
      return;
    }

    dispatch(actFetchAllPaymentBills({
      userId: userInfo.id
    }));
    // eslint-disable-next-line
  }, [userInfo.id]);
  const checkoutBillsClone = [...paymentBills];

  const showModal = (id) => {
    setIsModalOpen(true);

    const indexThisBills = checkoutBillsClone.findIndex((_cart) => {
      return _cart.id === id;
    });
    setCartsInCheckoutBills(checkoutBillsClone[indexThisBills].carts);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

  const renderDetail = (paymentBills) => {
    console.log(paymentBills, "cartsInPaymentBillscartsInPaymentBills");
    return paymentBills?.map((_cart) => {
      return (
        <tr key={_cart.id}>
          <td className="cart-page-shop-table__img-product">
            <p>{_cart.orderNumber}</p>
          </td>
          <td className="cart-page-shop-table__name-product">
            <p className="name">{_cart.dateOfBill}</p>
          </td>
          <td className="cart-page-shop-table__price-product">
            <p className="name">{_cart.payment}</p>
          </td>
          <td className="cart-page-shop-table__subtotal-product">
            {_cart.totalMoney}
          </td>
          <td className="cart-page-shop-table__subtotal-product">
            <Button onClick={() => showModal(_cart.id)}>Xem chi tiết</Button>
          </td>
        </tr>
      );
    });
  };

  console.log(cartsInCheckoutBills, "cartsInCheckoutBills");

  return (
    <div className="purchase-history-wrapper">
      <div className="purchase-history">
        <div className="purchase-history-table">
          <div className="purchase-history-table__table-grp">
            <table className="cart-page-shop-table__shop-table">
              <thead className="cart-page-shop-table__thead">
                <tr className="cart-page-shop-table__thead-tr">
                  <th className="cart-page-shop-table__th2">Mã đơn hàng</th>
                  <th className="cart-page-shop-table__th3">Ngày đặt đơn</th>
                  <th className="cart-page-shop-table__th4">Phương thức thanh toán</th>
                  <th className="cart-page-shop-table__th6">Giá trị đơn hàng</th>
                </tr>
              </thead>
              <tbody className="cart-page-shop-table__tbody">
                {renderDetail(paymentBills)}
                <CartPurchase
                  handleOk={handleOk}
                  handleCancel={handleCancel}
                  isModalOpen={isModalOpen}
                  cartsInCheckoutBills={cartsInCheckoutBills}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
