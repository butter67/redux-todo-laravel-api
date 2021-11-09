import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
// { content: "Get some coffee beans", completed: false },
// { content: "Go to the supermarket", completed: false },
// { content: "Pick my son up", completed: true },
// ];

export const TasksSlice = createSlice({
  name: "tasks",

  initialState: [],

  reducers: {
    //set users
    setUsers: (state, action) => {
      state.users = action.payload;
    },
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
          moveTasks.splice(task, 1);
        }
        return moveTask;
      });
      // const moveTasks = [...state];
      // moveTasks.map((task) => {
      //   if (task.title === action.payload) {
      //     const target = task;

      //     target.completed = true;
      //     moveTasks.splice(target, 1);
      //   }

      //   const newUnDone = [...moveTasks];
      //   console.log(newUnDone);
      //   return newUnDone;
      // });
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

export const getUsers = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch(setUsers(data));
  };
};

export const {
  addStore,
  deleteTask,
  moveTask,
  backTask,
  setUsers,
} = TasksSlice.actions;
export default TasksSlice.reducer;
