import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { AppWrapper, TitleApp, TitleContacts } from 'components/app.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/operations';
import { selectContatcs, selectError, selectIsLoading } from 'redux/selectors';

export const Contacts = () => {
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
