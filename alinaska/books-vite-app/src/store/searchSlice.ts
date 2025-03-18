import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {         
    searchText: string;
    isSearchActive: boolean
  }  

 export const initialStateSearch: SearchState = {        
    searchText: '',
    isSearchActive: false
  };

  export const searchSlice = createSlice({
    name: 'search',
    initialState: initialStateSearch,
    reducers: {
      
      setSearchText: (state, action: PayloadAction<string>) => {
        state.searchText = action.payload;
      },
      setSearchActive: (state, action: PayloadAction<boolean>) => {
        state.isSearchActive = action.payload;
      },
    },
  });