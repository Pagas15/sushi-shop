import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import sushiSlice from './slices/sushiSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: { sushi: sushiSlice, filters: filterSlice, user: userSlice },
});
