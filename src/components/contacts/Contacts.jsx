import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from '../../selectors/crmSelectors';
import Contact from './Contact';
import { Link } from 'react-router-dom';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const contactElements = contacts.map(contact => (
    <li key={contact._id}>
      <Link to={`/${contact._id}`}>
        <Contact {...contact} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {contactElements}
    </ul>
  );
};

export default Contacts;
