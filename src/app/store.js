import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '../features/Shopping/inventory/inventorySlice';
import { cartReducer } from '../features/Shopping/cart/cartSlice';

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    cart: cartReducer,
  },
});
