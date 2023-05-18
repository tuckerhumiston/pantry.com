import { createSlice } from '@reduxjs/toolkit';



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        addItem: (state, action) => {
            state.cart.items.push(action.payload);
            //Add to total
        },
        removeItem: (state, action) => {
            state.cart.items.filter(item => item !== action.payload);
            //Remove from total
        },
    },
})

export const { addItem, removeItem } = cartSlice.actions;
export const selectCart = (state) => state.cart.items;
export default cartSlice.reducer;