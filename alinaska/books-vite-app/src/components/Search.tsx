import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../store/reducer';
import {setSearchText, setSearchActive} from '../store/reducer';


const Search = () => {
    const { searchText } = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch();

    const handleChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchText(e.target.value));         
      }, [dispatch, searchText]);       

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchText.trim() !== '') { 
        dispatch(setSearchActive(true));
      }
    }, [dispatch, searchText]);

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ mb: 3, bgcolor: 'white', borderRadius: '4px' }} variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-adornment">Введите ключевое слово</InputLabel>
        <OutlinedInput
          id="outlined-adornment"
          type="text"
          value={searchText}
          onChange={handleChangeSearch}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Поиск" edge="end" type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Название книги"
        />
      </FormControl>
    </form>
  );
};

export default Search;
