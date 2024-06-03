import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://665d84c1e88051d60406fc14.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get(API_URL);
    console.log('Fetched contacts:', response.data);
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios.post(API_URL, contact);
    console.log('Added contact:', response.data);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`${API_URL}/${contactId}`);
    console.log('Deleted contact ID:', contactId);
    return contactId;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log('Contacts loaded to state:', action.payload);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;
