import React, { useEffect, useState } from 'react';
import Contacts from './Contacts';

import { useDispatch } from 'react-redux';
import { setContacts } from '../../actions/crmActions';
import { fetchContacts } from '../../services/backendAPI';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const handlePageChange = ({ target }) => {
    if(target.name === 'next') setPage(page => page + 1);
    if(target.name === 'previous') setPage(page => page - 1);
  };

  useEffect(() => {
    fetchContacts(page)
      .then(({ contacts, totalPages }) => {
        dispatch(setContacts(contacts));
        setTotalPages(totalPages);
      });
  }, [page]);

  return (
    <>
      <button disabled={page === 1} name="previous" onClick={handlePageChange}>Previous</button>
      <button disabled={page === totalPages}name="next" onClick={handlePageChange} >Next</button>
      <Contacts />
    </>
  );
};

export default ContactsPage;
