import React, { useState } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { fetchSignup, fetchLogin } from '../services/auth';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const authService = (serviceFn, ...args) => {
    setAuthError(null);
    return serviceFn(...args)
      .then(user => setCurrentUser(user))
      .catch(err => setAuthError(err));
  };

  const signup = (email, password, profileImage) =>
    authService(fetchSignup, email, password, profileImage);

  const login = (email, password) =>
    authService(fetchLogin, email, password);


  return (
    <AuthContext.Provider value={{ currentUser, authError, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// REFACTORED ABOVE WITH AUTH SERVICE
// const signup = (email, password, profileImage) => {
//   setAuthError(null);
//   fetchSignup(email, password, profileImage)
//     .then(user => setCurrentUser(user))
//     .catch(err => setAuthError(err));
// };

// const login = (email, password) => {
//   setAuthError(null);
//   return fetchLogin(email, password)
//     .then(user => setCurrentUser(user))
//     .catch(err => setAuthError(err));
// };
