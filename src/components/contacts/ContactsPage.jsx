import React, { useEffect } from 'react';
import Contacts from './Contacts';

import { useDispatch } from 'react-redux';
import { setContacts } from '../../actions/crmActions';
import { fetchContacts } from '../../services/backendAPI';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchContacts()
      .then(contacts => {
        dispatch(setContacts(contacts));
      });
  }, []);

  return (
    <Contacts />
  );
};

export default ContactsPage;
