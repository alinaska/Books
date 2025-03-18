import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Author } from "../components/constants";

export interface AuthorState {
    authorData: Author[];     
   }
 
export const initialStateAuthor: AuthorState = {
authorData: [],
    
};

export const authorSlice = createSlice({
    name: 'author',
    initialState: initialStateAuthor,
    reducers: {
        
        setAuthor: (state, action: PayloadAction<[]>) => {
        state.authorData = action.payload;
        }
    },
    });