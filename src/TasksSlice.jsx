import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Get some coffee beans", "Go to the supermarket"];

// const initialState = [
//   {
//     id: 1,
//     text: "Get some coffee beans",
//   },
//   {
//     id: 2,
//     text: "Go to the supermarket",
//   },
// ];
// const initialState = {
//   undone: [
//     { id: 1, content: "Get some coffee beans" },
//     { id: 2, content: "Go to the supermarket" },
//   ],
//   done: [
//     { id: 3, content: "Go to the bank" },
//     { id: 4, content: "Pick my son up" },
//   ],
// };

export const TasksSlice = createSlice({
  name: "content",
  initialState,

  reducers: {
    //タスクの追加
    addStore: (state, action) => [...state, action.payload],
    // {
    //   state.tasks.id++;
    //   const newTask = {
    //     id: state.tasks.id,
    //     text: action.payload,
    //   };
    //   state.tasks = [newTask, ...state.tasks];
    // },
    //タスクの削除
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task !== action.payload);

      // const newTasks = [...state];
      // newTasks.splice(index, 1);
      // state.tasks = newTasks;
    },
  },
});

export const { addStore, deleteTask } = TasksSlice.actions;
export default TasksSlice.reducer;
