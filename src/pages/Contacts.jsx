import { useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

function Contacts() {
  const { items, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      {items.length > 0 ? (
        <ContactList></ContactList>
      ) : (
        <p>No contacts yet...</p>
      )}
    </div>
  );
}

export default Contacts;
