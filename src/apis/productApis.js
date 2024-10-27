import axios from "axios";

export const productApis = {
  getAllProducts: async (params) => {
    try {
      const response = await axios.get(`${process.env.THIEN_DANG_APP_BE_URL}/products`, {
        params: {
          ...params,
        },
      });
      return response.data; // Nếu bạn chỉ cần dữ liệu, không cần toàn bộ response
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  getProductsById: async (productId) => {
    const { data } = await axios.get(
      `${process.env.THIEN_DANG_APP_BE_URL}products/${productId}`
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
