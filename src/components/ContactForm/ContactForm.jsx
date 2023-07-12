import { useState } from 'react';
import {
  AddContactBtn,
  ContactFormLabel,
  Form,
  Input,
} from './contactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContatcs } from 'redux/selectors';
import { addContactThunk } from 'redux/thunks';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContatcs);
  const dispatch = useDispatch();

  const handleChangeValue = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = contacts.find(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`"${name}" is already in contacts!`);
      return;
    }

    dispatch(addContactThunk({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContactFormLabel>
        Name
        <Input
          value={name}
          onChange={handleChangeValue}
          type="text"
          name="name"
          pattern="^([ \u00c0-\u01ffa-zA-Z'\-])+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactFormLabel>
      <ContactFormLabel>
        Phone
        <Input
          value={phone}
          onChange={handleChangeValue}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactFormLabel>

      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
};
