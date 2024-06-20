import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApis } from "../../../apis/productApis";

const initialState = {
  isLoading: false,
  products: [],
  productInfo: {},
  imgsProducts: [],
  errors: {},
  pagination: {
    currentPage: 1,
    limitPerPage: 12,
    total: 12,
  },
  searchKey: "",
  params: {
    _sort: null,
    _order: null,
    category: null,
    // q: "Rings", truyền vào q => nó sẽ search product theo key này
    // q: null,
    price_lte: null,
    price_gte: null,
    star_lte: null,
    star_gte: null,
    evaluate: null,
    // price_lte: 5000000,
    // price_gte: 1500000,
  },
  filter: "",
};

export const actFetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  // Lấy total từ header response của json-server - key: json-server total count
  async (params = {}) => {
    const response = await productApis.getAllProducts({
      ...params,
    });
    return {
      data: response.data,
      total: response.headers.get("X-Total-Count"),
    };
  }
);

export const actFetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    const product = await productApis.getProductsById(productId);
    return product;
  }
);

export const actFetchAllImgsProducts = createAsyncThunk(
  "products/fetchAllImgsProducts",
  async () => {
    const data = await productApis.getAllImgsProduct();
    return data;
  }
);

export const actUpdateProductById = createAsyncThunk(
  "products/updateProductById",
  async ({ id, productUpdate }, thunkAPI) => {
    const newProduct = await productApis.updateProductById(id, productUpdate);
    return newProduct;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    actSetLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setNewPage: (state, action) => {
      state.pagination = {
        ...state.pagination,
        currentPage: action.payload,
      };
    },
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },

    setFilterPrice: (state, action) => {
      state.filter = action.payload;
      switch (action.payload) {
        case "less than 100.000đ":
          state.params.price_gte = 0;
          state.params.price_lte = 99999;
          state.params._sort = "price";
          state.params._order = "asc";
          break;
        case "100.000đ - 300.000đ":
          state.params.price_gte = 100000;
          state.params.price_lte = 300000;
          state.params._sort = "price";
          state.params._order = "asc";
          break;
        case "300.000đ - 500.000đ":
          state.params.price_gte = 300000;
          state.params.price_lte = 500000;
          state.params._sort = "price";
          state.params._order = "asc";
          break;
        case "greater than 500.000đ":
          state.params.price_gte = 500000;
          state.params.price_lte = 9000000000000000;
          state.params._sort = "price";
          state.params._order = "asc";
          break;
        default:
          state.params._sort = "brands";
          state.params._order = "asc";
          break;
      }

    },

    setFilterEvaluate: (state, action) => {
      state.filter = action.payload;
      switch (action.payload) {
        case "1 sao":
          state.params.evaluate = 1;
          break;
        case "2 sao":
          state.params.evaluate = 2;
          break;
        case "3 sao":
          state.params.evaluate = 3;
          break;
        case "4 sao":
          state.params.evaluate = 4;
          break;
        case "5 sao":
          state.params.evaluate = 5;
          break;
        default:
          state.params._sort = "resultStarAverage";
          state.params._order = "asc";
          break;
      }

    },

    setFilterCategory: (state, action) => {
      state.filter = action.payload;
      switch (action.payload) {
        case "Trang Trí Để Bàn":
          state.params.category = "Trang Trí Để Bàn";
          break;
        case "Trang Trí Dạng Treo":
          state.params.category = "Trang Trí Dạng Treo";
          break;
        case "Đèn Xông Tinh Dầu":
          state.params.category = "Đèn Xông Tinh Dầu";
          break;
        case "Đèn Led Trang Trí":
          state.params.category = "Đèn Led Trang Trí";
          break;
        case "Trang Trí Sinh Nhật":
          state.params.category = "Trang Trí Sinh Nhật";
          break;
        case "Đồ Hand Made":
          state.params.category = "Đồ Hand Made";
          break;
        case "Đồ Phong Thuỷ":
          state.params.category = "Đồ Phong Thuỷ";
          break;
        case "Quà Tặng":
          state.params.category = "Quà Tặng";
          break;
        default:
          state.params._sort = "category";
          state.params._order = "asc";
          break;
      }

    },
    clearAllFilter: (state, action) => {
      state.filter = action.payload;
      state.params = {
        _sort: null,
        _order: null,
        // q: "Rings", truyền vào q => nó sẽ search product theo key này
        // q: null,
        price_lte: null,
        price_gte: null,
        // price_lte: 5000000,
        // price_gte: 1500000,
      };
    },
    filterArrange: (state, action) => {
      state.filter = action.payload;
      switch (action.payload) {
        case "Name: A-Z":
          state.params._sort = "name";
          state.params._order = "asc";
          break;
        case "Name: Z-A":
          state.params._sort = "name";
          state.params._order = "desc";
          break;
        case "Price: Low to High":
          state.params._sort = "price";
          state.params._order = "asc";
          break;
        case "Price: High to Low":
          state.params._sort = "price";
          state.params._order = "desc";
          break;
        default:
          state.params._sort = "brands";
          state.params._order = "asc";
          break;
      }

    },

    deleteFilterReducer: (state, action) => {
      state.params = {
        _sort: null,
        _order: null,
        // brand: null,
        // q: null,
        price_lte: null,
        price_gte: null,
      };
    },
  },
  extraReducers: (builder) => {
    // fetch all products:
    builder.addCase(actFetchAllProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(actFetchAllProducts.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
    });
    builder.addCase(actFetchAllProducts.fulfilled, (state, action) => {
      // console.log(action.payload.data, "products fetch all");
      state.products = action.payload.data;
      state.pagination.total = action.payload.total;
      state.isLoading = false;
    });

    // fetch product by Id:
    builder.addCase(actFetchProductById.fulfilled, (state, action) => {
      state.productInfo = action.payload;
    });

    builder.addCase(actFetchAllImgsProducts.fulfilled, (state, action) => {
      state.imgsProducts = action.payload;
    });

    builder.addCase(actUpdateProductById.fulfilled, (state, action) => {
      state.productInfo = action.payload;
    });
  },
});

export const {
  actSetLoading,
  setNewPage,
  setSearchKey,
  filterArrange,
  deleteFilterReducer,
  setParams,
  setFilterPrice,
  setFilterCategory,
  setFilterEvaluate,
  clearAllFilter
} = productSlice.actions;
export const productReducer = productSlice.reducer;
