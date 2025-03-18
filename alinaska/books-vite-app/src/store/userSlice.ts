import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    token: string
  }

export const initialStateUser: UserState = {
    token: ''
  };

export const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    reducers: {
      setToken: (state, action: PayloadAction<string>) => {
        state.token = action.payload;
      }
    },
  });