import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // { content: "Get some coffee beans", completed: false },
  // { content: "Go to the supermarket", completed: false },
  // { content: "Pick my son up", completed: true },
];

export const TasksSlice = createSlice({
  name: "content",
  initialState,

  reducers: {
    //タスクの追加
    addStore: (state, action) => [...state, action.payload],

    //タスクの削除
    deleteTask: (state, action) => {
      const newTask = [...state];
      newTask.splice(action.payload, 1);
      return newTask;
    },

    //タスクの完了flugを立てる
    moveTask: (state, action) => {
      const moveTasks = [...state];
      moveTasks.map((task) => {
        if (task.title === action.payload) {
          task.completed = true;
        }
        return task;
      });
    },

    //タスクを未完了に戻す
    backTask: (state, action) => {
      const newDoneTasks = [...state];
      newDoneTasks.map((task) => {
        if (task.title === action.payload) {
          task.completed = false;
        }
        return task;
      });
    },
  },
});

export const { addStore, deleteTask, moveTask, backTask } = TasksSlice.actions;
export default TasksSlice.reducer;
