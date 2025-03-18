import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import LoginForm from './forms/LoginForm';
import TokenForm from './forms/TokenForm';
import { useState } from 'react';
import { darkPurple } from './constants';


const Header = () => {
    
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
    const [isTokenFormOpen, setIsTokenFormOpen] = useState(false);
  
    const handleOpenLoginForm = () => {
      setIsLoginFormOpen(true);
    };
  
    const handleCloseLoginForm = () => {
      setIsLoginFormOpen(false);
    };
  
    const handleRequestToken = () => {      
      setIsTokenFormOpen(true);      
      handleCloseLoginForm();
    };

    const handleCloseTokenForm = () => {
        setIsTokenFormOpen(false);
          };      
  
    return (
     <> <Box
        component="div"
        sx={{
            position:'absolute',
          top: 0,
          width: '100%',
          height: '72px',
          borderBottom: '1px solid grey',
          backgroundColor: darkPurple,
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '24px',
        }}
      >
        <Typography
          variant="h6"
          sx={{ textAlign: 'left', padding: '18px', color: 'white' }}
        >
          Книги
        </Typography>
        <IconButton size="medium" sx={{ color: 'white', padding: '18px' }} onClick={handleOpenLoginForm}>
          <AccountCircleIcon />
        </IconButton>
  </Box>
        <LoginForm
          open={isLoginFormOpen}
          handleClose={handleCloseLoginForm}
          onRequestToken={handleRequestToken}
        />
        <TokenForm
        open={isTokenFormOpen}
        handleClose={handleCloseTokenForm}
         
      />    
      </>
    );
  }


  export default Header;
