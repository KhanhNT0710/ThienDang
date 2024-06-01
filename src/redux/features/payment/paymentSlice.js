import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { paymentApis } from "../../../apis/paymentApis";
import { message } from "antd";

const initialState = {
  paymentBills: [],
  paymentBill: {},
};

export const actFetchAllPaymentBills = createAsyncThunk(
  "payment/fetchAllPaymentBills",
  async (params) => {
    const response = await paymentApis.getAllPaymenttBills(params);
    return response;
  }
);

export const actAddBill = createAsyncThunk("payment/addBill", async (bill) => {
  const response = await paymentApis.addBill(bill);
  return response;
});

const paymentSlice = createSlice({
  name: "payment",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actFetchAllPaymentBills.fulfilled, (state, action) => {
      state.paymentBills = action.payload;
    });

    builder.addCase(actAddBill.fulfilled, (state, action) => {
      const billData = action.payload;
      state.paymentBill = billData;
      state.paymentBills.push(billData);
      message.success("Kiểm tra đơn hàng tại lịch sử mua hàng!");
    });
  },
});

export const paymentReducer = paymentSlice.reducer;
