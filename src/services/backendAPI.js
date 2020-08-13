import { get, post } from './request';

export const fetchContacts = (page) => {
  return get(`/api/v1/contacts?page=${page}`);
};

export const addContacts = (contact) => {
  return post('/api/v1/contacts', contact);
};
