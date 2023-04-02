import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: 'all',
  reducers: {
    setFilter: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
