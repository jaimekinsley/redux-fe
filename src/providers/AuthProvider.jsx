import React, { useState } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { fetchSignup, fetchLogin } from '../services/auth';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = (email, password, profileImage) => {
    fetchSignup(email, password, profileImage)
      .then(user => setCurrentUser(user));
  };

  const login = (email, password) => {
    return fetchLogin(email, password)
      .then(user => setCurrentUser(user));
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
