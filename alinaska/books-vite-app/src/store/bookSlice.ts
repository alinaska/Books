import { Book } from "../components/constants";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BookState {
    books: Book[];
    authors: [],    
    selectedBook: Book | null
    
  }

  const initialStateBooks: BookState = {
    books: [],
    authors: [],    
    selectedBook: null
    };

    export const booksSlice = createSlice({
        name: 'books',
        initialState: initialStateBooks,
        reducers: {
          setBooks: (state, action: PayloadAction<Book[]>) => {
            state.books = action.payload;
          },
          setAuthors: (state, action: PayloadAction<[]>) => {
            state.authors = action.payload;
          },
          setSelectedBook:(state, action: PayloadAction<Book>) => {
            state.selectedBook = action.payload;
          },
          
        },
      });
