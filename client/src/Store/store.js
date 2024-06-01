import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./UserSlice";
import appReducer from './appSlice';
import promotionSlice from "./promotionSlice";

const store = configureStore({
  reducer:{
    user: authSlice,
    app: appReducer,
    promotion: promotionSlice,
  }
});

export default store;