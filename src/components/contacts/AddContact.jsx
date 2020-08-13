import React, { useState } from 'react';
import { addContacts } from '../../services/backendAPI';
import { useDispatch } from 'react-redux';
import { setNewContact } from '../../actions/crmActions';

const AddContact = () => {
  const [name, setName] = useState('');
  const [communicationMedium, setCommunicationMedium] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'communicationMedium') setCommunicationMedium(target.value);
    if(target.name === 'imageUrl') setImageUrl(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContacts({ name, communicationMedium, imageUrl })
      .then(newContact => dispatch(setNewContact(newContact)));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="communicationMedium"
          name="communicationMedium"
          placeholder="Communication Medium"
          value={communicationMedium}
          onChange={handleChange}
        />
        <input
          type="imageUrl"
          name="imageUrl"
          placeholder="Image Link"
          value={imageUrl}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddContact;
