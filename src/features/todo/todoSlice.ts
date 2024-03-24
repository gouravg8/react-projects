import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface todoTypes {
  id: string;
  task: string;
  isDone: boolean;
}

const initialState = {
  todos: [] as todoTypes[],
};

// const initialState: {
//   todos: todoTypes[];
// } = { todos: [] as todoTypes[] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(todo);
    },
    doneTodo: (state, action) => {
      state.todos.map((todo) =>
        todo.id === action.payload ? (todo.isDone = !todo.isDone) : todo.isDone
      );
    },
  },
});

export const { addTodo, doneTodo } = todoSlice.actions;
export default todoSlice.reducer;
