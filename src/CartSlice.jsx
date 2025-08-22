import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.name === item.name);

      if (!existing) {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const itemName = action.payload.name;

      state.items = state.items.filter((i) => i.name !== itemName);
    },
    updateQuantity: (state, action) => {
      const { item, type } = action.payload;
      const existing = state.items.find((i) => i.name === item.name);

      if (existing) {
        if (type === "increment") existing.quantity++;
        else if (type === "decrement") {
          if (existing.quantity > 1) existing.quantity--;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
