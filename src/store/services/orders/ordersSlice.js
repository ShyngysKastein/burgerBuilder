import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from '../../../axios-orders';

const initialState = {
    loading:false,
    error:null,
    ordered:false,
}

export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async(payload) => {
        await axios.post('/orders.json',payload);
    }
)

const ordersSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        initOrder:(state) => {
            state.ordered = false;
        }
    },
    extraReducers:builder => {
        builder
        .addCase(createOrder.pending, state => {
            state.loading = true;
        })
        .addCase(createOrder.rejected, (state,action) => {
            state.error = action.error;
            state.loading = false;
        })
        .addCase(createOrder.fulfilled,(state) => {
            state.loading = false;
            state.ordered = true;
        })
    }
})

export const {initOrder} = ordersSlice.actions;
export default ordersSlice.reducer;