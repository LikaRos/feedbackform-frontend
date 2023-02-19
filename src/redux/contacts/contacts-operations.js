import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001';



export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (user) => {
    console.log('user' , user);
  
    const { data } = await axios.post('/users',  {user: user} );
    console.log("data" , data);
    return data;
  }
);



