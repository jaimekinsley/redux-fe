import React from 'react';
import { useCurrentUser } from '../../hooks/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const currentUser = useCurrentUser();
  return (
    <>
      {currentUser
        ? <img src={currentUser.profileImage} width="100" />
        : <Link to="/signup">Sign Up</Link>}
    </>
  );
};

export default Header;
