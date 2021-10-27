import { createSlice } from "@reduxjs/toolkit";

export const TasksSlice = createSlice({
  name: "content",
  initialState: {
    undone: ["Get some coffee beans", "Go to the supermarket"],
    done: ["Go to the bank", "Pick my son up"],
  },

  reducers: {
    addStore: (state, action) => [...state.tasks.undone, action.payload],
  },
});

export const { addStore } = TasksSlice.actions;
export default TasksSlice.reducer;
