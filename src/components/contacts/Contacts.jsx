import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from '../../selectors/crmSelectors';
import Contact from './Contact';

const Contacts = () => {
  const contacts = useSelector(getContacts);

  const contactElements = contacts.map(contact => (
    <li key={contact.id}>
      <Contact {...contact} />
    </li>
  ));

  return (
    <ul>
      {contactElements}
    </ul>
  );
};

export default Contacts;
