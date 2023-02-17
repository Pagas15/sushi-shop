import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_SUSHI } from '../../utill/consts';

export const fetchSushi = createAsyncThunk('sushiSlice/fetchSushi', async (params) => {
  const { data } = await axios.get(`${API_SUSHI}?${params}`);

  return data;
});

const initialState = {
  listSushi: [],
  status: 'loading',
};

export const sushiSlice = createSlice({
  name: 'sushiSlice',
  initialState,
  reducers: {
    setShushiList: (state, action) => {
      state.listSushi = action.payload;
    },
  },
  extraReducers: {
    [fetchSushi.pending]: (state) => {
      state.status = 'loading';
      state.listSushi = [];
    },
    [fetchSushi.fulfilled]: (state, action) => {
      state.listSushi = action.payload;
      state.status = 'success';
    },
    [fetchSushi.rejected]: (state) => {
      state.status = 'error';
      state.listSushi = [];
    },
  },
});

export const { setSushiList } = sushiSlice.actions;
export default sushiSlice.reducer;
