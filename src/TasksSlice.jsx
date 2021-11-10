import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  undone: [
    { content: "Get some coffee beans", completed: false },
    { content: "Go to the supermarket", completed: false },
    { content: "Watch the movie", completed: false },
  ],
  done: [{ content: "Pick my son up", completed: true }],
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
      moveTasks.map((task) => {
        if (task.content !== target.content) {
          return moveTasks;
        }
        moveTasks.splice(task, 1);
        return moveTasks;
      });

      return {
        undone: [...moveTasks],
        done: [...state.done, target],
      };
    },

    //タスクを未完了に戻す
    backTask: (state, action) => {
      const doneTask = [...state.done];
      console.log(action.payload);
      doneTask.splice(action.payload, 1);

      return {
        undone: [...state.undone, action.payload],
        done: [...doneTask],
      };
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
