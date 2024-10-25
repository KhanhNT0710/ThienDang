import { Input } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { actFetchUserById } from "../../redux/features/user/userSlice";

const BillingDetails = (props) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);
  const { userInfo } = useSelector((state) => state.user);
  // const { carts } = useSelector((state) => state.cart);
  const { control, errors, reset } = props;

  useEffect(() => {
    dispatch(actFetchUserById(userInfo.id));
    const userInfoClone = { ...userInfo };
    delete userInfoClone.id;
    // console.log(userInfo, "userInfo in billing details");
    reset({ ...userInfoClone });
    // eslint-disable-next-line
  }, []);

  const handleToggleDifferentAddress = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="billing-detail-container">
      <div className="billing-detail">
        <div>
          <div className="billing-detail__title">
            <h3>Thông Tin Khách Hàng</h3>
          </div>
          <div className="billing-detail__form-grp">
            <div className="billing-detail__form-grp--full-name">
              <label>Họ và tên:</label>
              <Controller
                control={control}
                name="fullName"
                render={({ field }) => {
                  return <Input {...field} />;
                }}
              />
              {!!errors.fullName?.message && (
                <i style={{ color: "red", padding: "0px 10px" }}>
                  {errors.fullName?.message}
                </i>
              )}
            </div>

            <div className="billing-detail__form-grp--street-address">
              <label>Địa chỉ nhận hàng:</label>
              <Controller
                control={control}
                name="address"
                render={({ field }) => {
                  return <Input {...field} />;
                }}
              />
              {!!errors.address?.message && (
                <i style={{ color: "red", padding: "0px 10px" }}>
                  {errors.address?.message}
                </i>
              )}
            </div>

            <div className="billing-detail__form-grp--phone">
              <label>Số điện thoại:</label>
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field }) => {
                  return <Input {...field} />;
                }}
              />
              {!!errors.phoneNumber?.message && (
                <i style={{ color: "red", padding: "0px 10px" }}>
                  {errors.phoneNumber?.message}
                </i>
              )}
            </div>

            <div className="billing-detail__form-grp--email-address">
              <label>Email người nhận:</label>
              <Controller
                control={control}
                name="email"
                render={({ field }) => {
                  return <Input {...field} />;
                }}
              />
              {!!errors.email?.message && (
                <i style={{ color: "red", padding: "0px 10px" }}>
                  {errors.email?.message}
                </i>
              )}
            </div>
          </div>

          <div className="billing-detail__order-notes">
            <label>Ghi chú: </label>
            <Controller
              control={control}
              name="orderNotes"
              render={({ field }) => {
                return (
                  <Input
                    placeholder="Tên toà nhà, số tầng, số phòng, hoặc giao ngoài giờ hành chính... "
                    {...field}
                  />
                );
              }}
            />
            {!!errors.orderNotes?.message && (
              <i style={{ color: "red", padding: "0px 10px" }}>
                {errors.orderNotes?.message}
              </i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
