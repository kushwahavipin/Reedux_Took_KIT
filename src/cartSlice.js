import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.name === action.payload.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems
        .map((item) =>
          item.name === action.payload.name
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
        .filter((item) => item.quantity > 0);
    },
  },
});

export const { addToCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
