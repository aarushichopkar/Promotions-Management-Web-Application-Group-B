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
      return { id, revenue: response.data };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCustomerEngage = createAsyncThunk(
  "getCustomerEngage",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`promotion/get-customer-engagement?promotion-id=${id}`);
      return { id, visits: response.data };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getConverionRate = createAsyncThunk(
  "getConverionRate",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`promotion/get-conversion-rate?promotion-id=${id}`);
      return { id, conversionRate: response.data };
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
    customerEnagage: {},
    conversionRate:{}
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
      })
      .addCase(getRevenueByPromotionId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCustomerEngage.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCustomerEngage.fulfilled, (state, action) => {
        state.loading = false;
        state.customerEnagage[action.payload.id] = action.payload.visits;
      })
      .addCase(getCustomerEngage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getConverionRate.pending, (state) => {
        state.loading = true;
      })
      .addCase(getConverionRate.fulfilled, (state, action) => {
        state.loading = false;
        state.conversionRate[action.payload.id] = action.payload.conversionRate;
      })
      .addCase(getConverionRate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userPromotion.reducer;

export const { searchUser } = userPromotion.actions;
