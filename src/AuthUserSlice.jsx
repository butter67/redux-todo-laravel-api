import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: "",
};

export const AuthUserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    // [getUser.pending]: (state, action) => {
    //   state.status = "loading";
    // },
    // [getUser.fulfilled]: (state, action) => {
    //   state.status = "success";
    //   // console.log(action.payload);
    //   state.user = action.payload;
    // },
    // [getUser.rejected]: (state, action) => {
    //   state.status = "failed";
    //   alert("No One found!");
    // },
  },
});
export const { setLoginUser } = AuthUserSlice.actions;
export default AuthUserSlice.reducer;
