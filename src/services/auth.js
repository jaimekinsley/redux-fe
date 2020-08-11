export const fetchSignup = (email, password, profileImage) => {
  return fetch(`${process.env.API_URL}/api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password, profileImage })
  })
    .then(res => res.json());
};
