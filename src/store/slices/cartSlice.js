import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listCartItems: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.listCartItems = state.listCartItems.reduce((a, item) => {
        if (item.id === action.payload.id) {
          if (action.payload.count < 1) {
            console.log(action.payload.count);
            return a;
          } else {
            return [...a, { ...item, count: action.payload.count }];
          }
        } else {
          return [...a, item];
        }
      }, []);
      [state.totalCount, state.totalPrice] = state.listCartItems.reduce(
        (a, item) => {
          return [a[0] + item.count, a[1] + item.count * item.price];
        },
        [0, 0],
      );
    },
    addToCart: (state, action) => {
      if (state.listCartItems.find((item) => item.id === action.payload.id)) {
        state.listCartItems = state.listCartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      } else {
        state.listCartItems = [...state.listCartItems, { ...action.payload, count: 1 }];
      }
      [state.totalCount, state.totalPrice] = state.listCartItems.reduce(
        (a, item) => {
          return [a[0] + item.count, a[1] + item.count * item.price];
        },
        [0, 0],
      );
    },
    removeType: (state, action) => {
      state.listCartItems = state.listCartItems.filter((item) => item.id !== action.payload);
      [state.totalCount, state.totalPrice] = state.listCartItems.reduce(
        (a, item) => {
          return [a[0] + item.count, a[1] + item.count * item.price];
        },
        [0, 0],
      );
    },
    clearCart: (state) => {
      state.listCartItems = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const selectCart = (state) => state.cart;
export const { addToCart, clearCart, setCurrent, removeType } = cartSlice.actions;
export default cartSlice.reducer;
