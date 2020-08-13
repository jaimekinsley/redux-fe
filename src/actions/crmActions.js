export const SET_CONTACTS = 'SET_CONTACTS';
export const setContacts = contacts => ({
  type: SET_CONTACTS,
  payload: contacts
});

export const SET_NEW_CONTACT = 'SET_NEW_CONTACT';
export const setNewContact = contacts => ({
  type: SET_NEW_CONTACT,
  payload: contacts
});

export const SET_CONTACTS_LOADING = 'SET_CONTACTS_LOADING';
export const setContactsLoading = () => ({
  type: SET_CONTACTS_LOADING
});

export const SET_COMMUNICATIONS = 'SET_COMMUNICATIONS';
export const setCommunications = communications => ({
  type: SET_COMMUNICATIONS,
  payload: communications
});

export const SET_COMMUNICATIONS_LOADING = 'SET_COMMUNICATIONS_LOADING';
export const setCommunicationsLoading = () => ({
  type: SET_COMMUNICATIONS_LOADING
});
