import {
  AddContactBtn,
  ContactFormLabel,
  Form,
  Input,
} from 'components/ContactForm/contactForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditing } from 'redux/contacts/contactsSlice';
import { editContactThunk } from 'redux/contacts/operations';
import { selectCurrentContact } from 'redux/selectors';

export const EditForm = () => {
  const currentContact = useSelector(selectCurrentContact);

  const [name, setName] = useState(currentContact.name);
  const [number, setNumber] = useState(currentContact.number);
  const dispatch = useDispatch();

  const handleChangeValue = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editContactThunk({ id: currentContact.id, name, number }));
    dispatch(toggleEditing());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContactFormLabel>
        New name
        <Input
          value={name}
          onChange={handleChangeValue}
          type="text"
          name="name"
          placeholder="Edit name"
          required
        />
      </ContactFormLabel>
      <ContactFormLabel>
        New phone number
        <Input
          value={number}
          onChange={handleChangeValue}
          type="tel"
          name="number"
          placeholder="Edit phone number"
          required
        />
      </ContactFormLabel>

      <AddContactBtn type="submit">Edit contact</AddContactBtn>
    </Form>
  );
};
