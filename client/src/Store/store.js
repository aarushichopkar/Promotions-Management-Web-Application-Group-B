import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./UserSlice";
import appReducer from './appSlice';
import promotionSlice from "./promotionSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer:{
    user: authSlice,
    app: appReducer,
    promotion: promotionSlice,
    product: productSlice,
  }
});

export default store;