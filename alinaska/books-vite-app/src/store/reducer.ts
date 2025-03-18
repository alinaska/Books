import { userSlice, UserState } from "./userSlice";
import { searchSlice, SearchState} from "./searchSlice"; 
import { authorSlice, AuthorState } from "./authorSlice";  
import { booksSlice, BookState } from "./bookSlice";  
    
  export interface RootState {
    search: SearchState;
    user: UserState;
    books: BookState;
    author: AuthorState;
  }  
  
  export const {    
    setSearchText,
    setSearchActive,
  } = searchSlice.actions;
  
  export const { setToken } = userSlice.actions;
  
  export const { setBooks, setSelectedBook } = booksSlice.actions;

  export const { setAuthor } = authorSlice.actions;
  
  export default {
    search: searchSlice.reducer,
    user: userSlice.reducer,
    books: booksSlice.reducer,
    author: authorSlice.reducer
  };