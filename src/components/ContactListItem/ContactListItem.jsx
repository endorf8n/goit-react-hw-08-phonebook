import PropTypes from 'prop-types';
import { ContactItemStyled, DeleteBtnStyled } from './contactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemStyled>
      - {name}: {number}
      <DeleteBtnStyled
        type="button"
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </DeleteBtnStyled>
    </ContactItemStyled>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
