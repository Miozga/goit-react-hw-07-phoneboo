import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../slices/contactsSlice';
import ContactItem from './ContactItem';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.filter);
  const { status, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts =
    contacts &&
    contacts.filter(contact => {
      if (typeof contact.name === 'string') {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      } else {
        console.error('Invalid contact name type:', contact);
        return false;
      }
    });

  if (status === 'loading') {
    return <p>Loading contacts...</p>;
  }

  if (status === 'failed') {
    return <p className="error">Failed to load contacts: {error}</p>;
  }

  return (
    <ul>
      {filteredContacts &&
        filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

export default ContactList;
