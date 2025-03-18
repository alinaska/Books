import { Box, Paper, CardMedia, Typography, Rating} from '@mui/material';
import { useEffect, useState } from "react";
import Search from './Search';
import {setSearchActive, setBooks, setSelectedBook} from '../store/reducer';
import {fetchSearch } from './api';
import { Link } from 'react-router-dom';
import {RootState} from '../store/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { Book } from './constants';


const BookList = () => {
  const { searchText, isSearchActive } = useSelector((state: RootState) => state.search);
  const { books } = useSelector((state: RootState) => state.books);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchBooks = async () => {
    try {        
      const data = await fetchSearch(searchText);      
      dispatch(setBooks(data.docs || []));
      
    } catch (error) {
      console.error("Ошибка при загрузке книг:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    if (isSearchActive) {
      fetchBooks();
      dispatch(setSearchActive(false));
    }
  }, [isSearchActive, searchText, dispatch]); 
  

  const extractBookId = (bookKey: string | null): string | null => {
    return bookKey?.startsWith('/works/') ? bookKey.substring('/works/'.length) : null;
  };

  const handleBookClick = (book: Book) => {     
    dispatch(setSelectedBook(book))
};


  return (
    <Box sx={{height: 'fit-content', flexDirection:'row', position: 'absolute', width: 'max-content', boxSizing: 'border-box', display: 'block'}}>
      <Box sx={{height: 'fit-content', width: 'fit-content'}}><Search /></Box>    
    
      {isLoading && <></>}
      {!isLoading && (
        <>
          <Paper sx={{ p: 2, ml: 10, width: '1200px'}}>
            <Box display="flex" flexDirection="column" gap={2} >              
              <Typography variant="h4" fontWeight="bold">Поиск книг</Typography>
              
              <Search />
              {books.length > 0 ? (
                books.map((book: Book) => (
                  <Box key={book.cover_i} display="flex" gap={2}>
                    <CardMedia 
                      component="img"
                      src={`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg` || ''} 
                      alt={book.title || 'Без названия'} 
                      sx={{ width: 110, height: 180, borderRadius: '4px' }}
                    /> 
                    <Box>                  
                      <Link to={`/books/${extractBookId(book.key)}`} 
                      style={{ textDecoration: 'none', color: 'inherit' }}
                      onClick={() => handleBookClick(book)}>
                        <Typography variant="body1" fontWeight="bold">{book.title || 'Без названия'}</Typography>
                        </Link>
                        
                        <Typography variant="body2">
                          {Array.isArray(book.author_name) && book.author_name.length > 0 && book.author_name.map((author)=>(
                            <Link to={`/authors/${author}`} key={author} ><span> | {author} |</span></Link>))}</Typography>
                        
                        <Typography variant="body2">{Math.round(book.ratings_average * 10) / 10 } avg rating</Typography>
                        <Rating
                          name="rating"
                          value={book.ratings_average}
                          precision={0.5} 
                          readOnly
                          size="small"
                        />
                      </Box>
                      <Box>
                    </Box>
                  </Box>
                ))
              ) : (
                <p>Книг не найдено</p>
              )}
            </Box>
          </Paper>
          
        </>
      )}
    </Box>
  );
};
export default BookList;