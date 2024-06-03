import { useDispatch } from 'react-redux';
import { deleteContact } from '../slices/contactsSlice';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
