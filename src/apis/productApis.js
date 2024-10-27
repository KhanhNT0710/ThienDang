import axios from "axios";

export const productApis = {
  getAllProducts: async (params) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BE_URL}data.json`, {
        params: {
          ...params,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  getProductsById: async (id_product) => {
    try {
      const { data } = await axios.get('https://media.denlongthiendang.com/data.json');

      // Kiểm tra xem dữ liệu có tồn tại không
      if (!data || !data.Product || !Array.isArray(data.Product)) {
        throw new Error("Invalid data format from server.");
      }

      // Tìm sản phẩm theo id_product trong danh sách
      const product = data.Product.find((item) => item.id_product === id_product);

      if (!product) {
        throw new Error(`Product with id ${id_product} not found.`);
      }

      return product;
    } catch (error) {
      console.error("Error fetching product by ID:", error.message);
      throw error;
    }
  },




  getAllImgsProduct: async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BE_URL}data.json`);
      return response.data.Product; // Đảm bảo trả về phần dữ liệu cần thiết
    } catch (error) {
      console.error("Error fetching images:", error);
      throw error;
    }
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

