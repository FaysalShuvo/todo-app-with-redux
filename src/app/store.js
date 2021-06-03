import { configureStore } from "@reduxjs/toolkit";
import saveTodo from "../features/todoSlice";

export const store = configureStore({
  reducer: {
    todos: saveTodo,
  },
});
