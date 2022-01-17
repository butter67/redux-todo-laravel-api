import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dispatch } from "react-redux";
import axios from "axios";

const initialState = {
  undone: [
    { content: "1Hello", completed: false },
    { content: "2Hey!", completed: false },
    { content: "3Hola~", completed: false },
    { content: "4Yoh!", completed: false },
  ],
  done: [{ content: "5", completed: false }],
};

export const TasksSlice = createSlice({
  name: "tasks",

  initialState,
  reducers: {
    //タスクの追加
    addStore: (state, action) => {
      return {
        undone: [...state.undone, action.payload],
        done: [...state.done],
      };
    },

    //タスクの削除
    deleteTask: (state, action) => {
      const i = action.payload;
      const newTasks = [...state.undone];
      newTasks.splice(i, 1);
      return {
        undone: [...newTasks],
        done: [...state.done],
      };
    },

    //タスクの完了でDone Tasksに移動する
    moveTask: (state, action) => {
      const target = action.payload;
      const moveTasks = [...state.undone];
      console.log(target);
      console.log(target.index);
      console.log(target.taskObject.content);
      moveTasks.splice(target.index, 1);

      const doneTasks = [...state.done, target.taskObject];

      return {
        undone: [...moveTasks],
        done: [...doneTasks],
      };
    },

    //タスクを未完了に戻す
    backTask: (state, action) => {
      const target = action.payload;
      const newDoneTasks = [...state.done];
      newDoneTasks.splice(target.index, 1);

      const newUndoneTasks = [...state.undone, target.taskObject];

      return {
        undone: [...newUndoneTasks],
        done: [...newDoneTasks],
      };
    },
  },
});

// export const getUsers = () => {
//   return async (dispatch) => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     dispatch(setUsers(data));
//   };
// };

export const { addStore, deleteTask, moveTask, backTask, setUsers } =
  TasksSlice.actions;
export default TasksSlice.reducer;
