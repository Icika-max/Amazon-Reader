import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await fetch('http://localhost:3000/books');
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    return response.json();
  }
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book) => {
    const response = await fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    if (!response.ok) {
      throw new Error('Failed to add book');
    }
    return response.json();
  }
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookId) => {
    const response = await fetch(`http://localhost:3000/books/${bookId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete book');
    }
    return bookId;
  }
);

export const updateBook = createAsyncThunk(
  'books/updateBook',
  async (book) => {
    const response = await fetch(`http://localhost:3000/books/${book.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    if (!response.ok) {
      throw new Error('Failed to update book');
    }
    return response.json();
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (book) => book.id !== action.payload
        );
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const updatedBook = action.payload;
        const existingBook = state.list.find(
          (book) => book.id === updatedBook.id
        );
        if (existingBook) {
          Object.assign(existingBook, updatedBook);
        }
      });
  },
});

export default booksSlice.reducer;
