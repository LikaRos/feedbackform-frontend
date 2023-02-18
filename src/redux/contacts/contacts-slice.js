import { createSlice } from '@reduxjs/toolkit';
import {
  
  fetchAddContact,
 
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    user: {
      name: "",
      email: "",
      message: "",
           },
    loading: false,
  },

  extraReducers: {

 
    [fetchAddContact.pending]: state => {
      state.loading = true;
    },
    [fetchAddContact.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user.push(payload);
    },
   
  },
});


export default contactsSlice.reducer;
