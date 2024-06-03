import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
