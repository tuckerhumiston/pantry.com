import { createSlice } from '@reduxjs/toolkit';

import { produce } from './storeItems';


const initialInventory = [produce];

export const inventorySlice = createSlice({
    name: 'inventory',
    initialInventory,
    reducers: {

    }
})