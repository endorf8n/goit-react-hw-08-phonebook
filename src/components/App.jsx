import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppWrapper, TitleApp, TitleContacts } from './app.styled';
import { selectContatcs, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/thunks';
import { Loader } from './Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContatcs);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const countTotalContacts = () => {
    return contacts.length;
  };

  const total = countTotalContacts();

  return (
    <AppWrapper>
      <TitleApp>Phonebook</TitleApp>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>

      {total === 0 ? (
        'There is no contacts in your phonebook!'
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {isLoading && !error && <Loader />}
    </AppWrapper>
  );
};
