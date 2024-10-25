import React from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import "./style.scss";
import CardTable from "../../components/CardTable";

const CartPage = () => {
    const navigate = useNavigate();
    const { carts } = useSelector((state) => state.cart);
    const { isLogin } = useSelector((state) => state.user);

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
        const totalMoneyInBill = carts.reduce((total, cart) => {
            return total + parseFloat(cart.price) * cart.quantity;
        }, 0);
        return formatNumber(totalMoneyInBill);
    };

    const handleRedirectToPayment = () => {
        if (carts.length !== 0) {
            if (isLogin) {
                navigate(ROUTES.ORDER_PAGE);
            } else {
                navigate(ROUTES.LOGIN_PAGE);
            }
        } else {
            alert("Vui lòng thêm sản phẩm vào giỏ hàng trước")
        }

    };

    return (
        <div className="cart-page-wrapper">
            <div className="cart-page">
                <div className="cart-page-shop-table">
                    <div className="cart-page-shop-table__shop-table-grp">
                        <CardTable />
                    </div>

                    <div className="cart-page-cart-totals">
                        <div className="cart-page-cart-totals__cart-totals">
                            <div className="cart-page-cart-totals__title">
                                <h3>Thông tin đơn hàng</h3>
                            </div>
                            <table className="cart-page-cart-totals__car-totals-table">
                                <tbody>
                                    <tr>
                                        <td>Shipping</td>
                                        <td>
                                            <p>Phí vận chuyển sẽ được cập nhật trong quá trình thanh toán.</p>
                                        </td>
                                    </tr>

                                    <tr style={{ color: "red" }}>
                                        <td>Tổng cộng</td>
                                        <td >{getTotalMoneyInBill()}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="cart-page-cart-totals__btn-proceed-to-checkout">
                                <Button onClick={handleRedirectToPayment}>
                                    Đặt Hàng
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
