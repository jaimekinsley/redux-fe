import React, { useState } from 'react';
import { useSignup } from '../../hooks/AuthContext';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const signup = useSignup();
  const history = useHistory();

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'profileImage') setProfileImage(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    signup(email, password, profileImage)
      .then(() => history.push('/dashboard'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />

      <input
        type="profileImage"
        name="profileImage"
        placeholder="Profile Image"
        value={profileImage}
        onChange={handleChange}
      />

      <button>Sign Up</button>
    </form>
  );

};

export default Signup;
