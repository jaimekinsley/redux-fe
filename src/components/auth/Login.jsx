import React, { useState } from 'react';
import { useLogin } from '../../hooks/AuthContext';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const login = useLogin();

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password);
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

      <button>Log In</button>
    </form>
  );
};

export default Login;
