import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: 'all',
  reducers: {
    setFilter: (state, action) => {
      console.log('[filter-reducer]', action.payload);
      state = action.payload;
      return state;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
