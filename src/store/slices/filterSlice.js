import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: 'rating',
  category: 0,
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setCatefory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setCatefory, setSort } = filterSlice.actions;
export default filterSlice.reducer;
