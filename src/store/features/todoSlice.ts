import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state) => {},
    deleteTodo: (state, action) => {},
    editTodo: (state, action) => {},
    deleteAll: (state, action) => {},
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
