import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishListslice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});