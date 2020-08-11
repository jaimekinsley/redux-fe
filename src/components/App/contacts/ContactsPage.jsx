import React, { useEffect } from 'react';
import Contacts from './Contacts';
import { fetchContacts } from '../../../services/backendAPI';
import { useDispatch } from 'react-redux';
import { setContacts } from '../../../actions/crmActions';

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
