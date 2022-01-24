import axios from 'axios';

export const getPublications = async () => {
  const response = await axios.get('https://61ede36d634f2f00170ced7b.mockapi.io/publications');
  return response.data;
};

export const createPublication = async data => {
  const response = await axios.post(
    'https://61ede36d634f2f00170ced7b.mockapi.io/publications',
    data,
  );
  return response.data;
};

export const deletePublication = async id => {
  const response = await axios.delete(
    `https://61ede36d634f2f00170ced7b.mockapi.io/publications/${id}`,
  );
  return response.data;
};
