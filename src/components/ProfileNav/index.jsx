import React, { useState } from "react";
import "./style.scss";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";
import { actUpdatePasswordById } from "../../redux/features/user/userSlice";
import { yupResolver } from "@hookform/resolvers/yup";

const ProfileNav = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleToggleBoxPasword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const schema = Yup.object().shape({
    newPassword: Yup.string()
      .required("Vui lòng nhập mật khẩu mới")
      .min(6, "Mật khẩu có ít nhấ 6 ký tự")
      .max(12, "Mật khẩu có nhiều nhất 12 ký tự"),
    confirmPassword: Yup.string()
      .required("Nhập lại mật khẩu mới")
      .oneOf([Yup.ref("newPassword")], "Mật khẩu không khớp"),
  });
  const methods = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = methods;


  const onValid = (formValueChangePassword) => {
    const formValuePasswordUpdate = {
      password: formValueChangePassword.newPassword,
      confirmPassword: formValueChangePassword.confirmPassword,
    };
    if (userInfo.password !== formValueChangePassword.currentPassword) {
      return alert("Mật khẩu hiện tại không chính xác!");
    } else {
      dispatch(
        actUpdatePasswordById({
          id: userInfo.id,
          userUpdate: formValuePasswordUpdate,
        })
      );
    }
    reset("");
  };

  return (
    <div className="profile-nav-wrapper">
      <div className="profile-nav">
        <div className="profile-nav__avatar-grp">
          {!!userInfo?.avatarURL ? (
            <img
              src={userInfo?.avatarURL}
              alt=""
              className="profile-nav__avatar-grp--avatar"
            />
          ) : (
            <img
              src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
              alt=""
              className="profile-nav__avatar-grp--avatar"
            />
          )}

          <div>
            <h3 className="profile-nav__avatar-grp--user-name">
              {userInfo?.fullName}
            </h3>
          </div>
        </div>

        <div className="profile-nav__list-information-grp">
          <ul className="profile-nav__list-information">

            <li
              className="profile-nav__list-information--change-password"
              onClick={handleToggleBoxPasword}
            >
              Thay đổi mật khẩu
            </li>
            <div className={`profile-nav__box-password ${isShowPassword ? "profile-nav__show-box" : ""}`}>
              <Form
                className="change-pass-word-form"
                onSubmitCapture={handleSubmit(onValid)}
              >
                <div className="change-pass-word-form__current-password">
                  <Controller
                    control={control}
                    name="currentPassword"
                    render={({ field }) => {
                      return <Input.Password
                        type="password"
                        placeholder="Nhập mật khẩu hiện tại..."
                        autoComplete="on"
                        {...field}
                      />;
                    }}
                  />
                </div>

                <div className="change-pass-word-form__new-password">
                  <Controller
                    control={control}
                    name="newPassword"
                    render={({ field }) => {
                      return <Input.Password autoComplete="on" type="password" placeholder="Nhập mật khẩu mới..." {...field} />;
                    }}
                  />
                  {!!errors.newPassword?.message && (
                    <i style={{ color: "red", padding: "0px 10px" }}>
                      {errors.newPassword?.message}
                    </i>
                  )}
                </div>

                <div className="change-pass-word-form__confirm-password">
                  <Controller
                    control={control}
                    name="confirmPassword"
                    render={({ field }) => {
                      return <Input.Password type="password" placeholder="Nhập lại mật khẩu mới..." autoComplete="on" {...field} />;
                    }}
                  />
                  {!!errors.confirmPassword?.message && (
                    <i style={{ color: "red", padding: "0px 10px" }}>
                      {errors.confirmPassword?.message}
                    </i>
                  )}
                </div>

                <div className="change-pass-word-form__btn-save">
                  <Button htmlType="submit">Save</Button>
                  <Button onClick={handleToggleBoxPasword}>Đóng</Button>
                </div>
              </Form>
            </div>
            <li
              className="profile-nav__list-information--purchase-history"
              onClick={() => {
                navigate(ROUTES.USER_PURCHASE_HISTORY_PAGE);
              }}
            >
              Xem lịch sử mua hàng
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
