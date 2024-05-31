import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dopen: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateOpen: (state, action) => {
      state.dopen = action.payload;
    },
  },
});

export const { updateOpen } = appSlice.actions;
export default appSlice.reducer;