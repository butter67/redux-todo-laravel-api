import { configureStore } from "@reduxjs/toolkit";

import TasksReducer from "./TasksSlice";
import ApiReducer from "./ApiSlice";

export default configureStore({
  reducer: {
    tasks: TasksReducer,
    api: ApiReducer,
  },
});
