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
            state.total += action.payload.price;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
                state.total -= action.payload.price;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeItem;
            state.total -= action.payload.price;
        },


    },
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export const cartReducer = cartSlice.reducer;