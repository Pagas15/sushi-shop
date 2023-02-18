import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  id: null,
  avatar: null,
  name: null,
  number: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.avatar = action.payload.avatar;
      state.name = action.payload.name;
      state.number = action.payload.number;
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
      state.avatar = null;
      state.name = null;
      state.number = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
