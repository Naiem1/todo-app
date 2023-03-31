import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: 'all',
  reducers: {
    all: (state, action) => {},
    pending: (state, action) => {},
    complete: (state, action) => {},
  },
});

export const { all, pending, complete } = filterSlice.actions;
export default filterSlice.reducer;
