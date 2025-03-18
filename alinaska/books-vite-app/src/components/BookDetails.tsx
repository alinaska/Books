import { Typography, Box, Paper, Rating } from '@mui/material';
import { useSelector } from 'react-redux';
import {RootState} from '../store/reducer';


const BookDetails = () => {
  const { selectedBook } = useSelector((state: RootState) => state.books); 

  const characters = selectedBook?.person;
  const renderedCharacters = characters?.join(', ');
  const places = selectedBook?.place;
  const renderedPlaces = places?.join(', ');
  const authors = selectedBook?.author_name;
  const renderedAuthors = Array.isArray(authors)&&authors?.join(', ');
  const subjects = selectedBook?.subject.slice(0, 7);
  const renderedSubjects = subjects?.join(', ');

  return (
    <Paper className="book-details-page" sx={{ p: 2, ml: 5, position: 'relative' }}>
  {selectedBook && ( 
    <Box>
      <Box
        flex={1}
        position='absolute'
        top={20}
        left={100}
      >
        <img
          src={`https://covers.openlibrary.org/b/id/${selectedBook.cover_i}-M.jpg`}
          alt={selectedBook.title}
        />
      </Box>
      <Box
        flex={2}
        position='absolute'
        top={20}
        left={370}
      >
        <Typography variant="h4" gutterBottom>{selectedBook.title}</Typography>
        <Box mt={2}>
          <Typography variant="h6" gutterBottom>от {renderedAuthors}</Typography>
          <Typography variant="h6" gutterBottom>{selectedBook.first_publish_year} г</Typography>
          <Typography variant="body2">{Math.round(selectedBook.ratings_average * 10) / 10}</Typography>
          <Rating
            name="rating"
            value={selectedBook?.ratings_average}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="body2" gutterBottom>Количество страниц (ср.знач.) {selectedBook.number_of_pages_median}</Typography>
        </Box>
        <Box mt={4}>
        
        <Typography variant="body1" gutterBottom>{selectedBook.first_sentence[0] || 'Описание отсутствует'} ...</Typography> 
      </Box>
      <Box mt={4}>
      <Typography variant="body1" gutterBottom><span className="rubrics-label"> РУБРИКИ: </span>{renderedSubjects}</Typography> 
      </Box>
      <Box mt={2}>
        <Typography variant="body1" gutterBottom> <span className="rubrics-label">ПЕРСОНАЖИ: </span> {renderedCharacters}</Typography> 
      </Box>
      <Box mt={2}>        
        <Typography variant="body1" gutterBottom><span className="rubrics-label"> МЕСТА: </span>{renderedPlaces}</Typography> 
      </Box>
      </Box>
      
    </Box>   
  )}
</Paper>
    );
  };
    

    export default BookDetails  