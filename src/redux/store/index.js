import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../features/product/productSlice";
import { userReducer } from "../features/user/userSlice";
import { commentReducer } from "../features/comment/commentSlice";
import { cartReducer } from "../features/cart/cartSlice";
import { orderReducer } from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    comment: commentReducer,
    cart: cartReducer,
    order: orderReducer
  },
});
