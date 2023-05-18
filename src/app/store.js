import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import inventoryReducer from '../features/Shopping/inventory/inventorySlice';
import cartReducer from '../features/Shopping/cart/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    inventory: inventoryReducer,
    cart: cartReducer,
  },
});
