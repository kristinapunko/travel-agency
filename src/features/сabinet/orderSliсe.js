
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    orderStatus: [], 
    error: "",
};

export const sendOrderRequest = createAsyncThunk(
    'order/sendBookingRequest',
    async ({ tourId, userId }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('accessToken');
            if (!token) throw new Error('No token found');
            if (!tourId) throw new Error('Tour ID is missing');

            const response = await axios.post(
                'http://127.0.0.1:8000/cabinet/orders/',
                { user: userId, tour: tourId },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.detail || error.message || 'Order request failed');
        }
    }
);

export const fetchOrders = createAsyncThunk(
    'order/fetchBookings',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('accessToken');
            if (!token) throw new Error('No token found');

            const response = await axios.get(
                'http://127.0.0.1:8000/cabinet/orders/',
                { headers: { Authorization: `Bearer ${token}` } }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.detail || error.message || 'Failed to fetch bookings');
        }
    }
);


const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(sendOrderRequest.pending, (state) => {
                state.loading = true;
            })
            .addCase(sendOrderRequest.fulfilled, (state, action) => {
                state.loading = false;
                state.orderStatus.push(action.payload); 
            })
            .addCase(sendOrderRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
            .addCase(fetchOrders.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.orderStatus = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    },
});

export default orderSlice.reducer;