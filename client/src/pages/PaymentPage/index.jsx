import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import YourOrder from "../../components/YourOrder";
import { Button } from "antd";
// import { actClearCarts } from "../../redux/features/cart/cartSlice";

const PaymentPage = () => {
  const { order } = useSelector((state) => state.order);
  const navigate = useNavigate();

  console.log(order, 'order');
  return (
    <div className="check-out-container">
      <div className="check-out">
        <div className="check-out__noti">
          <p>Thank you! Your order has been received</p>
        </div>
        <div className="check-out__infor-bill">
          <table>
            <thead>
              <tr>
                <th>ORDER NUMBER:</th>
                <th>DATE:</th>
                <th>PAYMENT METHOD:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{order?.orderNumber}</td>
                <td>{order?.dateOfBill}</td>
                <td>{order?.payment}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="check-out__payment-link-noti">
          <p>
            Đơn hàng của bạn đã đặt thành công, hệ thống sẽ xác nhận đơn của bạn trong vòng 24h. Xin cảm ơn
          </p>
        </div>

        <div className="check-out__order-detail-table">
          <YourOrder isPaymentPage={true} />
        </div>
      </div>
      <Button onClick={() => { navigate(ROUTES.HOME_PAGE) }} >Về Trang chủ</Button>
      <Button onClick={() => { navigate(ROUTES.USER_PURCHASE_HISTORY_PAGE) }} > Xem Lịch Sử Mua Hàng</Button>
    </div>
  );
};

export default PaymentPage;
