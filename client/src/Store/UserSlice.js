import { AddTaskOutlined } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import hostName from '.../config';
import axios from 'axios';
import { useCallback } from "react";
const hostName = "http://localhost:9092/";

export const signUpUser=createAsyncThunk(
    'user/signupUser',
    async(userCredential) => {
    const request = await axios.post(`${hostName}api/v1/auth/register`, userCredential);
    const response = await request.data;
    return response;
    }
);

export const signInUser=createAsyncThunk(
  'user/signinUser',
  async(userCredential) => {
  const request = await axios.post(`${hostName}api/v1/auth/authenticate`, userCredential);
  const response = await request.data;
  localStorage.setItem('auth', JSON.stringify(response));
  return response;
  }
);

const authSlice = createSlice({
  name: 'user',
  initialState: {
       msg: "",
       loading: false,
       user: "",
       error: "",
       token: "",
  },
  reducers:{
       
    addToken: (state, action) => {
      state.token = localStorage.getItem("token")
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user")
    },
    logout: (state, action) => {
      localStorage. removeItem("auth"); 
    }   
      
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, { payload: { error, msg } }) => {
        state.loading = false;
        if (error) {
          state.error = error;
        } else {
          state.msg = msg;
        }
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.user=null;
        console.log(action.error.message);
        if(action.error.message === 'Request failed with status code 403'){
          state.error = 'Please fill the form correctly';
        }
        else{
          state.error = action.error.message;
        }
      })
      
      /////////////////////////////
      .addCase(signInUser.pending, (state,action) => {
        state.loading = true;
      })
      .addCase(signInUser.fulfilled, (state,action) => {
        state.loading =false;
      state.user=action.payload;
      state.error=null;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading =false;
              state.user=null;
              console.log(action.error.message);
              if(action.error.message === 'Request failed with status code 403'){
                state.error = 'Access Denied Invalid Credentials';
              }
              else{
                state.error = action.error.message;
              }
      })
  }
});


// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//        loading: false,
//        user: null,
//        error: null
//   },
//   extraReducers:(builder) => {
//     builder
//     .addCase(loginUser.pending,(state)=>{
//       state.loading =true;
//       state.user=null;
//       state.error=null;
//     })
//     .addCase(loginUser.fulfilled,(state,action)=>{
//       state.loading =false;
//       state.user=action.payload;
//       state.error=null;
//     })
//     .addCase(loginUser.rejected,(state,action)=>{
//       state.loading =false;
//       state.user=null;
//       console.log(action.error.message);
//       if(action.error.message === 'Request failed with status code 403'){
//         state.error = 'Access Denied Invalid Credentials';
//       }
//       else{
//         state.error = action.error.message;
//       }
//     })
//   }
// });
export const {addToken,addUser,logout}= authSlice.actions;
export default authSlice.reducer;