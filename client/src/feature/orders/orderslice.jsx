import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async () => {
    const response = await fetch('http://localhost:3000/orders');
    if (!response.ok) {
      throw new Error('Failed to fetch orders');
    }
    return response.json();
  }
);

export const addOrder = createAsyncThunk(
  'orders/addOrder',
  async (order) => {
    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
    if (!response.ok) {
      throw new Error('Failed to add order');
    }
    return response.json();
  }
);

export const deleteOrder = createAsyncThunk(
  'orders/deleteOrder',
  async (orderId) => {
    const response = await fetch(`http://localhost:3000/orders/${orderId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete order');
    }
    return orderId;
  }
);

export const updateOrder = createAsyncThunk(
  'orders/updateOrder',
  async (order) => {
    const response = await fetch(`http://localhost:3000/orders/${order.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
    if (!response.ok) {
      throw new Error('Failed to update order');
    }
    return response.json();
  }
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (order) => order.id !== action.payload
        );
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        const updatedOrder = action.payload;
        const existingOrder = state.list.find(
          (order) => order.id === updatedOrder.id
        );
        if (existingOrder) {
          Object.assign(existingOrder, updatedOrder);
        }
      });
  },
});

export default ordersSlice.reducer;
