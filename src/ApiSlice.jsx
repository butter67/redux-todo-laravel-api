import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tasks: [],
};

//-- axios --

export const getContents = createAsyncThunk("fetch/get", async () => {
  const res = await axios.get("http://redux-todo-api.test/api");
  return res.data;
});

export const ApiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},

  extraReducers: {
    [getContents.pending]: (state, action) => {
      state.status = "loading";
    },
    [getContents.fulfilled]: (state, action) => {
      state.status = "success";
      console.log(action.payload);
      //   const res = action.payload;
      //   res.map(
      // (res) => {
      //   if (res.completed == false) {
      //     console.log("This is false");
      //     state.undone = res;
      //   } else {
      //     console.log("This is true");
      //     state.done = res;
      //   }
      //   return res;
      // }
      //   -----------
      // (res) =>
      //   res.completed == false ? (state.undone = res) : (state.done = res)
      //   );

      state.tasks = action.payload;
    },
    [getContents.rejected]: (state, action) => {
      state.status = "failed";
      alert("something bad just happened!");
    },
  },
});

export default ApiSlice.reducer;
