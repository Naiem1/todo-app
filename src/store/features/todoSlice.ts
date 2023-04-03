/* eslint-disable @typescript-eslint/no-shadow */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import shortid from 'shortid';
import TODO_URL from '../../api/index';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todos =
  localStorage.getItem('todoItems') !== null
    ? JSON.parse(localStorage.getItem('todoItems') as string)
    : [];

const initialState = {
  entities: todos,
  isLoading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  try {
    const response = await Axios.get(TODO_URL);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (todo, action) => {
      if (action.payload) {
        todo.entities.unshift({
          id: shortid.generate(),
          title: action.payload,
          completed: false,
        });
      }

      localStorage.setItem('todoItems', JSON.stringify(todo.entities));
    },
    deleteTodo: (todo, action) => {
      const taskIndex = todo?.entities?.findIndex(
        (todo: { id: number }) => todo.id === action.payload
      );

      todo.entities.splice(taskIndex, 1);

      localStorage.setItem('todoItems', JSON.stringify(todo.entities));
    },
    completedTodo: (todos, action) => {
      const todo = todos?.entities?.find(
        (todo: { id: number }) => todo.id === action.payload
      );
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (todos, action) => {
      const { title, id } = action.payload;
      const todo = todos.entities.find(
        (todo: { id: number }) => todo.id === id
      );

      if (todo && title) {
        todo.title = title;
        localStorage.setItem('todoItems', JSON.stringify(todos.entities));
      }
    },
    deleteAll: (todo: any, action) => {
      todo.entities = action.payload;
      localStorage.setItem('todoItems', JSON.stringify(todo.entities));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (todo) => {
        todo.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (todo, action) => {
        todo.isLoading = false;

        if (todo.entities.length === 0) {
          todo.entities = action.payload;
        } else {
          localStorage.setItem(
            'todoItems',
            JSON.stringify(todo.entities.map((todo: Todo) => todo))
          );
        }
      })
      .addCase(fetchTodos.rejected, (todo, action) => {
        todo.isLoading = false;
        // todo.error: nul = action.error.message;
      });
  },
});

export const { addTodo, deleteTodo, editTodo, completedTodo, deleteAll } =
  todoSlice.actions;
export default todoSlice.reducer;
