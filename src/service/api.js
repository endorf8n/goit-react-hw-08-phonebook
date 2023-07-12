import axios from 'axios';

const contactsApi = axios.create({
  baseURL: 'https://64ac092b9edb4181202f0507.mockapi.io',
});

export const fetchContacts = async () => {
  const { data } = await contactsApi.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await contactsApi.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await contactsApi.delete(`/contacts/${id}`);
  return data;
};
