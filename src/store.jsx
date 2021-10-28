import { configureStore } from "@reduxjs/toolkit";

import TasksReducer from "./TasksSlice";

export default configureStore({
  reducer: {
    tasks: TasksReducer,
  },
});
