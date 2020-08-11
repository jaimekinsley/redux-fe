import { post, get } from './request';

export const fetchSignup = (email, password, profileImage) =>
  post('/api/v1/auth/signup', { email, password, profileImage });

export const fetchLogin = (email, password) =>
  post('/api/v1/auth/login', { email, password });

export const fetchVerify = () => get('/api/v1/auth/verify');

// OLD CODE: Refactored with request.js file

// import { request } from "express";
// export const fetchSignup = (email, password, profileImage) => {
//   return fetch(`${process.env.API_URL}/api/v1/auth/signup`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     credentials: 'include',
//     body: JSON.stringify({ email, password, profileImage })
//   })
//     .then(res => res.json());
// };

// export const fetchLogin = (email, password) => {
//   return fetch(`${process.env.API_URL}/api/v1/auth/login`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     credentials: 'include',
//     body: JSON.stringify({ email, password })
//   })
//     .then(res => res.json());
// };
