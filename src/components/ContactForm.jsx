import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../slices/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.contacts);

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([\s-'])[a-zA-Zа-яА-Я]+)*$"
        title="Imię może zawierać tylko litery, apostrof, myślnik i spacje. Na przykład Adrian, Jakub Kowalski, Karol de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleInputChange}
        placeholder="Imię"
      />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Numer telefonu musi składać się z cyfr i może zawierać spacje, myślniki, nawiasy i zaczynać się od +"
        required
        value={number}
        onChange={handleInputChange}
        placeholder="Numer"
      />

      <button type="submit" disabled={status === 'loading'}>
        Add contact
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default ContactForm;
