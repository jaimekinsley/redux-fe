export const SET_CONTACTS = 'SET_CONTACTS';
export const setContacts = contacts => ({
  type: SET_CONTACTS,
  payload: contacts
});

export const SET_COMMUNICATIONS = 'SET_COMMUNICATIONS';
export const setCommunications = communications => ({
  type: SET_COMMUNICATIONS,
  payload: communications
});
