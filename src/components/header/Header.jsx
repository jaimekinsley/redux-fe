import React from 'react';
import { useCurrentUser } from '../../hooks/AuthContext';
import { Link } from 'react-router-dom';

const AuthLinks = () => (
  <>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
  </>
);

const Header = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      {currentUser
        ? <h6>{currentUser.email}</h6>
        : <AuthLinks />}
    </>
  );
};

export default Header;
