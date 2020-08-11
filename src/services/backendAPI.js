export const fetchContacts = () => {
  return fetch('http://localhost:7890/api/v1/contacts')
    .then(res => res.json());
};
