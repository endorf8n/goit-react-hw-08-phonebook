import PropTypes from 'prop-types';
import {
  ButtonsStyled,
  ContactItemStyled,
  DeleteBtnStyled,
  EditBtnStyled,
} from './contactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations';
import { setCurrentContact, toggleEditing } from 'redux/contacts/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemStyled>
      - {name}: {number}
      <ButtonsStyled>
        <EditBtnStyled
          type="button"
          onClick={() => {
            dispatch(toggleEditing());
            dispatch(setCurrentContact({ id, name, number }));
          }}
        >
          Edit
        </EditBtnStyled>
        <DeleteBtnStyled
          type="button"
          onClick={() => dispatch(deleteContactThunk(id))}
        >
          Delete
        </DeleteBtnStyled>
      </ButtonsStyled>
    </ContactItemStyled>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
