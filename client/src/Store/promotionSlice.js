import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from '../component/utils/axiosinstance'


export const addNewPromotion = createAsyncThunk(
  "addPromotion",
  async (newpromotion, { rejectWithValue }) => {
    console.log(newpromotion);
  try{
    console.log(newpromotion);
    const response = await axiosInstance.post("promotion/add", newpromotion);
    console.log("add product response:", response);
    if(!response.status === 200) {
      throw new Error('failed to add product');
    }

  } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//read action
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


export const removePromotion = createAsyncThunk(
  "removePromotion",
  async (promotionId, { rejectWithValue }) => {
  try {
      console.log(promotionId);
        const response = await axiosInstance.delete("promotion?promotion_id=" + promotionId);
        console.log("Remove Product Response:", response);
        if (!response.status === 200) {
          throw new Error('Failed to delete product');
        }
        return promotionId;
      } catch (error) {
        return rejectWithValue(error.response.data);
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
      .addCase(removePromotion.pending, (state) => {
        state.loading = true;
      })
      .addCase(removePromotion.fulfilled, (state, action) => {
        state.loading = false;
        state.promotion = state.promotion.filter(promotion => promotion.id !== action.payload);
      })
      .addCase(removePromotion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
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

  //   [deleteUser.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [deleteUser.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     const { id } = action.payload;
  //     if (id) {
  //       state.users = state.users.filter((ele) => ele.id !== id);
  //     }
  //   },
  //   [deleteUser.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },

  //   [updateUser.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [updateUser.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.users = state.users.map((ele) =>
  //       ele.id === action.payload.id ? action.payload : ele
  //     );
  //   },
  //   [updateUser.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload.message;
  //   },
  // },
// }});
export default userPromotion.reducer;

export const { searchUser } = userPromotion.actions;
