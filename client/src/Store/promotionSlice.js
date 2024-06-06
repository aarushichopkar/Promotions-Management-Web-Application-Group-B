import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from '../component/utils/axiosinstance';

// Thunks
export const showPromotion = createAsyncThunk(
  "promotion/showPromotion",
  async (args, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("promotion/find-all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getTotalRev = createAsyncThunk(
  "promotion/getTotalRev",
  async (args, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("promotion/get-total-revenue-generated");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getRevenueByPromotionId = createAsyncThunk(
  "getRevenueByPromotionId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`promotion/get-promotion-revenue?promotion-id=${id}`);
      // console.log("stateProm");
      return { id, revenue: response.data };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userPromotion = createSlice({
  name: "userPromotion",
  initialState: {
    promotion: [],
    loading: false,
    error: null,
    searchData: [],
    totalRev: 0,
    promotionRevenues: {},  // Store revenues by promotion ID
  },
  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showPromotion.pending, (state) => {
        state.loading = true;
      })
      .addCase(showPromotion.fulfilled, (state, action) => {
        state.loading = false;
        state.promotion = action.payload;
      })
      .addCase(showPromotion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTotalRev.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTotalRev.fulfilled, (state, action) => {
        state.loading = false;
        state.totalRev = action.payload;
      })
      .addCase(getTotalRev.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getRevenueByPromotionId.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRevenueByPromotionId.fulfilled, (state, action) => {
        state.loading = false;
        state.promotionRevenues[action.payload.id] = action.payload.revenue;
        console.log("payload id"+action.payload.id)
        // console.log("stateProm" + state.promotionRevenues[action.payload.id] );
        // const { id, revenue } = action.payload;
        // state.promotionRevenues[id] = revenue;
        // state.promotionRevenues[1] = 100;
        // console.log(`Revenue for promotion ${id}: ${revenue}`);
        console.log('Updated promotionRevenues:', state.promotionRevenues);
        console.log("stateProm" + state.promotionRevenues );
      })
      .addCase(getRevenueByPromotionId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userPromotion.reducer;

export const { searchUser } = userPromotion.actions;
