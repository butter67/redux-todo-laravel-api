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

//----

export const ApiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    addStoreApi: (state, action) => {
      return {
        tasks: action.payload,
      };
    },
    updateTaskApi: (state, action) => {
      return {
        tasks: action.payload,
      };
    },
    updateReverseTaskApi: (state, action) => {
      return {
        tasks: action.payload,
      };
    },
    deleteTaskApi: (state, action) => {
      return {
        tasks: action.payload,
      };
    },
  },

  extraReducers: {
    [getContents.pending]: (state, action) => {
      state.status = "loading";
    },
    [getContents.fulfilled]: (state, action) => {
      state.status = "success";
      // console.log(action.payload);
      state.tasks = action.payload;
    },
    [getContents.rejected]: (state, action) => {
      state.status = "failed";
      alert("something bad just happened!");
    },
  },
});
export const {
  addStoreApi,
  deleteTaskApi,
  updateTaskApi,
  updateReverseTaskApi,
} = ApiSlice.actions;
export default ApiSlice.reducer;
