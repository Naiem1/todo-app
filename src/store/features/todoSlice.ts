import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import shortid from 'shortid';

const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

const initialState = {
  entities: [],
  isLoading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  try {
    const response = await Axios.get(TODO_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (todo, action) => {
      todo.entities.push({
        id: shortid.generate(),
        title: action.payload,
        completed: false,
      });
    },
    deleteTodo: (todo, action) => {
      const taskIndex = todo?.entities?.findIndex(
        (todo) => todo.id === action.payload
      );

      todo.entities.splice(taskIndex, 1);
    },
    editTodo: (state, action) => {},
    deleteAll: (todo, action) => {
      todo.entities = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (todo) => {
        todo.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (todo, action) => {
        todo.isLoading = false;
        todo.entities = action.payload;
      })
      .addCase(fetchTodos.rejected, (todo, action) => {
        todo.isLoading = false;
        todo.error = action.error.message;
      });
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
