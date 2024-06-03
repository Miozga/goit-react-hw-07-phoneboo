import { createSlice, nanoid } from '@reduxjs/toolkit';

const loadContactsFromLocalStorage = () => {
  const contacts = localStorage.getItem('contacts');
  return contacts ? JSON.parse(contacts) : [];
};

const saveContactsToLocalStorage = contacts => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: loadContactsFromLocalStorage(),
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        saveContactsToLocalStorage(state);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const updatedState = state.filter(
        contact => contact.id !== action.payload
      );
      saveContactsToLocalStorage(updatedState);
      return updatedState;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
