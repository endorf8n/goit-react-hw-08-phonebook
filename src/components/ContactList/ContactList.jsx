import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ListStyled } from './contactListstyled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ListStyled>
      {filteredContacts
        .map(contact => {
          return <ContactListItem {...contact} key={contact.id} />;
        })
        .reverse()}
    </ListStyled>
  );
};
