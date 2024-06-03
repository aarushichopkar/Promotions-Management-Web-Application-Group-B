import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from '../component/utils/axiosinstance'

export const showProduct = createAsyncThunk(
  "showProduct",
  async (args, { rejectWithValue }) => {
    const response = await axiosInstance.get("product/getProducts");
    console.log(response);
    try {
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const product = createSlice({
  name: "product",
  initialState: {
    product: [],
    loading: false,
    error: null,
    searchData: [],
  },

  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(showProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(showProduct.fulfilled, (state, action ) => {
        state.loading = false;
        state.product = action.payload;
//        state.product = action.payload.map(product => ({
//                  ...product,
//                  promotionId: product.promotion ? product.promotion.id : null
//                }));

      })
      .addCase(showProduct.rejected, (state, action) => {
        state.loading = false;
        state.product = [];
        state.error = action.payload;
//        state.product = action.payload;
      })
  }
});

export default product.reducer;

export const { searchUser } = product.actions;