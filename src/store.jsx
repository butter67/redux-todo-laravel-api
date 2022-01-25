import { configureStore } from "@reduxjs/toolkit";

import TasksReducer from "./TasksSlice";
import ApiReducer from "./ApiSlice";
import AuthUserReducer from "./AuthUserSlice";

export default configureStore({
  reducer: {
    tasks: TasksReducer,
    api: ApiReducer,
    user: AuthUserReducer,
  },
});
