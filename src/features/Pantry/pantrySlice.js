import { createSlice } from "@reduxjs/toolkit";


const pantrySlice = createSlice({
    name: 'pantry',
    initialState: {
        pantry: [],

    },
    reducers: {
        addToPantry: (state, action) => {
            const itemInPantry = state.pantry.find((item) => item.id === action.payload.id);
            if (itemInPantry) {
                itemInPantry.quantity++;
            } else {
                state.pantry.push({ ...action.payload, quantity: 1});
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.pantry.find((item) => item.id === action.payload);
            if (!item) return;
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.pantry.find((item) => item.id === action.payload);
            if (!item) { return}
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.pantry.filter((item) => item.id !== action.payload);
            state.pantry = removeItem;
        },
    }
});

export const { addToPantry, incrementQuantity, decrementQuantity, removeItem } = pantrySlice.actions;
export const selectPantry = (state) => state.pantry;
export const pantryReducer = pantrySlice.reducer;