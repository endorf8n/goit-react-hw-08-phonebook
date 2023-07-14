import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { EditForm } from 'components/EditForm/EditForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import {
  Title,
  TitleContacts,
  Wrapper,
} from 'pages/pagesStyles/contacts.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/operations';
import {
  selectContatcs,
  selectError,
  selectIsEditing,
  selectIsLoading,
  selectUser,
} from 'redux/selectors';

const Contacts = () => {
  const contacts = useSelector(selectContatcs);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const user = useSelector(selectUser);
  const isEditing = useSelector(selectIsEditing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const countTotalContacts = () => {
    return contacts.length;
  };

  const total = countTotalContacts();

  return (
    <Wrapper>
      <Title>{user.name}'s Phonebook</Title>
      {isEditing ? <EditForm /> : <ContactForm />}
      <TitleContacts>Contacts</TitleContacts>

      {total === 0 ? (
        'There is no contacts in your phonebook!'
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {isLoading && !error && isEditing && <Loader />}
    </Wrapper>
  );
};

export default Contacts;
