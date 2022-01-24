import axios from 'axios';

axios.defaults.baseURL = 'https://61ede36d634f2f00170ced7b.mockapi.io';

export const getPublications = async () => {
  const response = await axios.get('/publications');
  return response.data;
};

export const createPublication = async data => {
  const response = await axios.post('/publications', data);
  return response.data;
};

export const deletePublication = async id => {
  const response = await axios.delete(`/publications/${id}`);
  return response.data;
};
