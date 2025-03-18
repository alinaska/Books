import {Dialog, DialogActions, DialogContent, DialogTitle, Paper, Button, TextField} from '@mui/material';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import {setToken} from '../../store/reducer';

interface TokenFormProps {
  open: boolean;
  handleClose: () => void;
}
 const saveTokenToLocalStorage = (token: string) => {
      localStorage.setItem('authToken', token);
    };
    
    export const loadTokenFromLocalStorage = () => {
      return localStorage.getItem('authToken');
    };

export default function TokenForm({ open, handleClose }: TokenFormProps) {
  const dispatch = useDispatch();
    const [enteredToken, setEnteredToken] = useState('');
   
    const saveToken = () => {
      saveTokenToLocalStorage(enteredToken);
      dispatch(setToken(enteredToken)); 
    };     
  
    const handleSubmit = () => {
          
        handleClose(); 
        saveToken();                
    };
  
    return (
      <Paper> 
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth={true}>
        <DialogTitle>Введите токен</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="token"
            label="Токен"
            type="text"
            fullWidth
            variant="standard"
            value={enteredToken}
            onChange={(e) => setEnteredToken(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleSubmit}>ОК</Button>
        </DialogActions>
      </Dialog>
      </Paper> 
    );
  }