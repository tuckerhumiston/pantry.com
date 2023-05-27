import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '../features/Shopping/inventory/inventorySlice';
import { cartReducer } from '../features/Shopping/cart/cartSlice';
import { pantryReducer } from '../features/Pantry/pantrySlice'
 
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const cart = persistReducer(persistConfig, cartReducer);
const pantry = persistReducer(persistConfig, pantryReducer);


export const store = configureStore({
  reducer: {
    cart,
    inventory: inventoryReducer,
    pantry,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)