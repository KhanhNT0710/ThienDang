import axios from "axios";

export const productApis = {
  getAllProducts: async (params) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}products`,
      {
        params: {
          ...params,
        },
      }
    );
    return response;
  },

  getProductsById: async (productId) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BE_URL}products/${productId}`
    );
    return data;
  },

  getAllImgsProduct: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}imgsProducts`
    );
    return response.data;
  },

  updateProductById: async (idProduct, productUpdate) => {
    const response = await axios.patch(
      `${process.env.REACT_APP_BE_URL}products/${idProduct}`,
      productUpdate
    );
    return response.data;
  },
  createProduct: async () => { },
  deleteProductById: async () => { },
};
