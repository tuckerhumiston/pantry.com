import { createSlice } from "@reduxjs/toolkit";

const pantrySlice = createSlice({
    name: 'pantry',
    initialState: {
        pantry: [],

    },
    reducers: {
        addToPantry: (state, action) => {
            const itemInPantry = state.find((item) => item.id === action.payload.id);

            if (itemInPantry) {
                itemInPantry.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
                
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (!item) return;
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (!item) { return}
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const { addToPantry, incrementQuantity, decrementQuantity, removeItem } = pantrySlice.actions;
export const selectPantry = (state) => state.pantry;
export const pantryReducer = pantrySlice.reducer;