import { get } from './request';

export const fetchContacts = () => {
  return get('/api/v1/contacts');
};
