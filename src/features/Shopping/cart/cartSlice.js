import { createSlice } from '@reduxjs/toolkit';



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            const item = state.cart.find((item) => item.id === action.payload);
            if (itemInCart) {
                itemInCart.quantity++;
                state.total += action.payload.price;
            } else {
                state.cart.push({ ...action.payload, quantity:  1});
                state.total += action.payload.price;
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
        },


    },
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export const selectCart = (state) => state.cart.items;
export const cartReducer = cartSlice.reducer;