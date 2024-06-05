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

//delete action
// export const deleteUser = createAsyncThunk(
//   "deleteUser",
//   async (id, { rejectWithValue }) => {
//     const response = await fetch(
//       `https://641dd63d945125fff3d75742.mockapi.io/crud/${id}`,
//       { method: "DELETE" }
//     );

const userPromotion = createSlice({
  name: "userPromotion",
  initialState: {
    promotion: [],
    loading: false,
    error: null,
    searchData: [],
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
  
  // {
  //   [createUser.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [createUser.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.users.push(action.payload);
  //   },
  //   [createUser.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload.message;
  //   },
  //   [showPromotion.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [showPromotion.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.users = action.payload;
  //   },
  //   [showPromotion.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },

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
}});
export default userPromotion.reducer;

export const { searchUser } = userPromotion.actions;
