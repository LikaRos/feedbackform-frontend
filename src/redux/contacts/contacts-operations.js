import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001';



export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async ({  name, email, message }) => {
    console.log(name, email, message);
  
    const { data } = await axios.post('/users', { name, email, message });
    return data;
  }
);



