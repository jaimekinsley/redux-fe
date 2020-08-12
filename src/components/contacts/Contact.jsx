import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ name, communicationMedium, imageUrl }) => (
  <figure>
    <img src={imageUrl} />
    <figcaption> {name} - {communicationMedium}</figcaption>
  </figure>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  communicationMedium: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default Contact;
