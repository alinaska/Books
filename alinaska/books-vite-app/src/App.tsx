import Authors from './components/Authors';
import Header from './components/Header'
import './App.css'
import BookList from './components/BooksList';
import BookDetails from './components/BookDetails';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {  

  return (
      <BrowserRouter basename="/"> 
          <>
              <Header />
              
                  <Box component="div" display="flex" gap="10px" marginTop="80px" marginLeft="40px" padding="20px" position='absolute'>
                      <Routes>
                          <Route path="/" element={<><BookList /></>} />
                          <Route path="/books/:id" element={<BookDetails />} />
                          <Route path="/authors/:id" element={<Authors />} />
                      </Routes>
                  </Box>
             
          </>
      </BrowserRouter>
  );
};


export default App
