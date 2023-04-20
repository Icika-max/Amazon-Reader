import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOrders = createAsyncThunk(
  'myAccount/fetchOrders',
  async () => {
    const response = await fetch('http://localhost:3000/orders');
    if (!response.ok) {
      throw new Error('Failed to fetch orders');
    }
    return response.json();
  }
);

export const fetchReturnRequests = createAsyncThunk(
  'myAccount/fetchReturnRequests',
  async () => {
    const response = await fetch('http://localhost:3000/return-requests');
    if (!response.ok) {
      throw new Error('Failed to fetch return requests');
    }
    return response.json();
  }
);

export const initiateReturnRequest = createAsyncThunk(
  'myAccount/initiateReturnRequest',
  async (returnRequest) => {
    const response = await fetch('http://localhost:3000/return-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(returnRequest),
    });
    if (!response.ok) {
      throw new Error('Failed to initiate return request');
    }
    return response.json();
  }
);

const myAccountSlice = createSlice({
  name: 'myAccount',
  initialState: {
    orders: [],
    returnRequests: [],
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
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchReturnRequests.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReturnRequests.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.returnRequests = action.payload;
      })
      .addCase(fetchReturnRequests.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(initiateReturnRequest.fulfilled, (state, action) => {
        state.returnRequests.push(action.payload);
      });
  },
});

export default myAccountSlice.reducer;
