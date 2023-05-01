import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLendings = createAsyncThunk(
  'lendings/fetchLendings',
  async () => {
    const response = await fetch('https://kid-server.onrender.com/lendings');
    if (!response.ok) {
      throw new Error('Failed to fetch lendings');
    }
    return response.json();
  }
);

export const addLending = createAsyncThunk(
  'lendings/addLending',
  async (lending) => {
    const response = await fetch('https://kid-server.onrender.com/lendings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lending),
    });
    if (!response.ok) {
      throw new Error('Failed to add lending');
    }
    return response.json();
  }
);

export const deleteLending = createAsyncThunk(
  'lendings/deleteLending',
  async (lendingId) => {
    const response = await fetch(`https://kid-server.onrender.com/lendings/${lendingId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete lending');
    }
    return lendingId;
  }
);

export const updateLending = createAsyncThunk(
  'lendings/updateLending',
  async (lending) => {
    const response = await fetch(`https://kid-server.onrender.com/lendings/${lending.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lending),
    });
    if (!response.ok) {
      throw new Error('Failed to update lending');
    }
    return response.json();
  }
);

const lendingsSlice = createSlice({
  name: 'lendings',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLendings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLendings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchLendings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addLending.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteLending.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (lending) => lending.id !== action.payload
        );
      })
      .addCase(updateLending.fulfilled, (state, action) => {
        const updatedLending = action.payload;
        const existingLending = state.list.find(
          (lending) => lending.id === updatedLending.id
        );
        if (existingLending) {
          Object.assign(existingLending, updatedLending);
        }
      });
  },
});

export default lendingsSlice.reducer;
