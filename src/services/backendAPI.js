import { get } from './request';

export const fetchContacts = (page) => {
  return get(`/api/v1/contacts?page=${page}`);
};
