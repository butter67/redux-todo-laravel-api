import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: "",
};

export const AuthUserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    storeNewUser: (state, action) => {
      state.user = action.payload.user;
      console.log(action.payload);
    },
    setLoginUser: (state, action) => {
      state.user = action.payload;
    },
    setLoggedInUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {},
});
export const { setLoginUser, storeNewUser, setLoggedInUser } =
  AuthUserSlice.actions;
export default AuthUserSlice.reducer;
