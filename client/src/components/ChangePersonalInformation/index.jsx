import { Button, DatePicker, Input, Radio } from "antd";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchUserById,
  actUpdateUserById,
} from "../../redux/features/user/userSlice";
import dayjs from "dayjs";
import "./style.scss";
import { globalNavigate } from "../../utils/globalHistory";
import { ROUTES } from "../../constants/routes";
import { Navigate } from "react-router-dom";

const ChangePersonalInformation = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const phoneValidation = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  const emailValidation =
    /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$/;

  const schema = Yup.object().shape({
    fullName: Yup.string().required("Please input your full name"),
    age: Yup.string().required("Please input your age"),
    email: Yup.string()
      .required("Please input your email")
      .matches(emailValidation, "type email was wrong"),
    phoneNumber: Yup.string()
      .required("Please input your phone number")
      .matches(phoneValidation, "type phone number was wrong"),
    gender: Yup.string().required("Please input your gender"),
    dateOfBirth: Yup.string().required("Please input your date of birth"),
  });

  const methods = useForm({
    defaultValues: {
      fullName: "",
      age: "",
      email: "",
      phoneNumber: "",
      gender: "",
      dateOfBirth: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = methods;

  const onValid = (formValue) => {
    dispatch(
      actUpdateUserById({
        id: userInfo.id,
        userUpdate: formValue,
      })
    );

  };

  useEffect(() => {


    dispatch(actFetchUserById(userInfo.id));
    //   // reset form về giá trị của userInfo => hiển thị lên form profile
    reset({ ...userInfo });
    // eslint-disable-next-line
  }, []);



  return (
    <div className="change-infor-wrapper">
      <div className="change-infor-container">
        <div className="change-infor-container__title">
          <h3>My Profile</h3>
        </div>
        <form
          className="change-infor-form"
          onSubmit={handleSubmit(onValid)}
        >
          <div className="change-infor-form__name">
            <label htmlFor="fullName">Họ tên</label>
            <Controller
              control={control}
              name="fullName"
              render={({ field }) => {
                return <Input placeholder="Full name..." {...field} />;
              }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <span style={{ color: "red" }}>{errors.name?.message}</span>
          </div>

          <div className="change-infor-form__age">
            <label htmlFor="age">Tuổi</label>
            <Controller
              control={control}
              name="age"
              render={({ field }) => {
                return <Input placeholder="Age..." {...field} />;
              }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <span style={{ color: "red" }}>{errors.age?.message}</span>
          </div>

          <div className="change-infor-form__address">
            <label htmlFor="address">Địa chỉ</label>
            <Controller
              control={control}
              name="address"
              render={({ field }) => {
                return <Input placeholder="Address..." {...field} />;
              }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <span style={{ color: "red" }}>{errors.address?.message}</span>
          </div>

          <div className="change-infor-form__phone-number">
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field }) => {
                return <Input placeholder="Phone number..." {...field} />;
              }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <span style={{ color: "red" }}>{errors.phoneNumber?.message}</span>
          </div>

          <div className="change-infor-form__email">
            <label htmlFor="email">Email</label>
            <Controller
              control={control}
              name="email"
              render={({ field }) => {
                return <Input placeholder="Email..." {...field} />;
              }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <span style={{ color: "red" }}>{errors.email?.message}</span>
          </div>

          <div className="change-infor-form__gender-grp">
            <label htmlFor="gender">Giới tính</label>
            <Controller
              control={control}
              name="gender"
              render={({ field }) => {
                return (
                  <Radio.Group {...field}>
                    <Radio value={"male"}>Nam</Radio>
                    <Radio value={"female"}>Nữ</Radio>
                    <Radio value={"other"}>Khác</Radio>
                  </Radio.Group>
                );
              }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <span style={{ color: "red" }}>{errors.gender?.message}</span>
          </div>

          <div className="change-infor-form__birth-day">
            <label htmlFor="dateOfBirth">Ngày sinh: </label>
            <Controller
              control={control}
              name="dateOfBirth"
              render={({ field }) => {
                return (
                  <DatePicker
                    {...field}
                    value={field.value ? dayjs(field.value) : null}
                  />
                );
              }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <span style={{ color: "red" }}>{errors.dateOfBirth?.message}</span>
          </div>

          <div className="change-infor-form__btn-save">
            <Button htmlType="submit">Save</Button>
            <Button onClick={() => { globalNavigate(ROUTES.HOME_PAGE) }} >Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePersonalInformation;
