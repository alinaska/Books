import { fetchAuthor } from "./api"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, Paper, CardMedia, Typography, Rating } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {setAuthor} from '../store/reducer';
import {RootState} from '../store/reducer';


const Authors = () => {
const dispatch = useDispatch();
const { id } = useParams();
const {authorData} = useSelector((state: RootState) => state.author);

const getAuthorImageUrl = (authorKey: string) => `https://covers.openlibrary.org/a/olid/${authorKey}-M.jpg`;
const getBookImageUrl = (coverId: number | undefined) => `https://covers.openlibrary.org/b/id/${coverId}.jpg`;

const fetchData = async () => {
    try {                  
        const data = await fetchAuthor(id);        
       dispatch(setAuthor(data.docs))         
    } catch (error) {
      console.error("Ошибка при загрузке книг:", error);
    } 
  };
  
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Paper className="book-details-page" sx={{ p: 2, ml: 5, position: 'relative', minHeight: 'fit-content' }}>
      {authorData.length > 0 ? (
        authorData.map((author) => { 
            const authorImageUrl = getAuthorImageUrl(author.author_key);
            const bookImageUrl = getBookImageUrl(author.cover_i); 
  
          return (
            <Box key={author.author_key} display="flex" flexDirection="row" gap={2} > 
              <Box
                flex={1}
                position='absolute'
                top={20}
                left={100}
              >
                <img src={authorImageUrl} alt={`Author Image`} /> 
              </Box>
              <Box display='flex' gap={2} mt={2} width={500}>
                <CardMedia
                  component="img"
                  src={bookImageUrl}
                  alt={`${author.title || 'Без названия'}`} 
                  sx={{ width: 110, height: 180, borderRadius: '4px' }}
                />
                <Box>
                <Typography variant="h5" component="h1" gutterBottom>
                  {author.title}
                </Typography>
                <Typography variant="body1">
                  {author.author_name}
                </Typography>
                <Typography variant="body2">{Math.round(author.ratings_average * 10) / 10 } avg rating</Typography>
                        <Rating
                          name="rating"
                          value={author.ratings_average || 0}
                          precision={0.5} 
                          readOnly
                          size="small"
                        />
                </Box>
              </Box>
            </Box>
          );
        })
      ) : (
        <Typography>No author data found.</Typography> 
      )}
    </Paper>
  );
}


export default Authors