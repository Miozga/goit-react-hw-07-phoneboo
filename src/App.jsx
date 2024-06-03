import { Provider } from 'react-redux';
import './book.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  </Provider>
);

export default App;
