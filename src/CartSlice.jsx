import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        const {name,image,cost} = action.payload;
        state.items = state.items.filter((plant)=>plant.name!==name)
    },
    updateQuantity: (state, action) => {
        const {name,image,cost,quantity} = action.payload;
        const index = state.items.findIndex(plant=>plant.name===name);
        if(index>-1){
            state.items[index] = {name,image,cost,quantity};
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;