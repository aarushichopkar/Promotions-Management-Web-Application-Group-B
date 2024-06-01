import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from '../component/utils/axiosinstance'
//create action
// export const createUser = createAsyncThunk(
//   "createUser",
//   async (data, { rejectWithValue }) => {
//     console.log("data", data);
//     const response = await fetch(
//       "https://641dd63d945125fff3d75742.mockapi.io/crud",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     try {
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

//read action
export const showPromotion = createAsyncThunk(
  "showPromotion",
  async (args, { rejectWithValue }) => {
    const response = await axiosInstance.get("promotion/find-all");
    // console.log(response);
    try {
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
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

//     try {
//       const result = await response.json();
//       console.log(result);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

//update action
// export const updateUser = createAsyncThunk(
//   "updateUser",
//   async (data, { rejectWithValue }) => {
//     console.log("updated data", data);
//     const response = await fetch(
//       `https://641dd63d945125fff3d75742.mockapi.io/crud/${data.id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     try {
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const userPromotion = createSlice({
  name: "userPromotion",
  initialState: {
    promotion: [],
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
      .addCase(showPromotion.pending, (state) => {
        state.loading = true;
      })
      .addCase(showPromotion.fulfilled, (state, action ) => {
        state.loading = false;
      state.promotion = action.payload;
      })
      .addCase(showPromotion.rejected, (state, action) => {
        state.loading = false;
        state.promotion = action.payload;
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
