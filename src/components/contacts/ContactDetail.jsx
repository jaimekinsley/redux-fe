import React, { useEffect, useState } from 'react';
import { fetchContactById } from '../../services/backendAPI';
import { useDispatch } from 'react-redux';

const ContactDetail = ({ match }) => {
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetchContactById(match.params._id)
      .then(contact => {
        dispatch(setContact(contact));
      })
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h3>Loading...</h3>;

  return (
    <>
      <p>{contact.name}</p>
    </>
  );
};

export default ContactDetail;
