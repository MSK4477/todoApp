import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const local = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : [];
const initialState = local.todo;

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: v4(), completed: false, todo: action.payload });
      console.log(local.todo)

    },

    updateTodo: (state, action) => {
      const { id, data } = action.payload;

      const findTodo = state.find((todo) => todo.id == id);
      console.log(findTodo, "ftodo");
      if (findTodo) {
        findTodo.todo = data;
        return;
      }
    },

    deleteTodo: (state, action) => {
      const { id } = action.payload;

      if (id) {
        const newState = state.filter((todo) => todo.id !== id);
        return newState;
      }
    },

    markAsComleted : (state, action) => { 
       
      const { id } = action.payload

      const findTodo = state.find((todo) => todo.id == id);

      if(findTodo) { 
        findTodo.completed = !findTodo.completed
        return
      }
    }
  },
});

export default todoSlice.reducer;

export const { addTodo, updateTodo, deleteTodo, markAsComleted } = todoSlice.actions;
