import axios from "axios";

export const paymentApis = {
  getAllPaymenttBills: async (params) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}paymentBills`,
      {
        params: params,
      }
    );
    return response.data;
  },

  addBill: async (bill) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}paymentBills`,
      bill
    );
    return response.data;
  },
};
