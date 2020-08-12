import React, { useContext } from 'react';

export const AuthContext = React.createContext();

export const useCurrentUser = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser;
};

export const useAuthError = () => {
  const { authError } = useContext(AuthContext);
  return authError;
};

export const useSignUp = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};
