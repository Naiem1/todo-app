import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './features/filterSlice';
import todoReducer from './features/todoSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    filter: filterReducer,
  },
});

export default store;
