import axios from 'axios';

const baseUrl = 'http://api.weatherapi.com/v1/';
const apiKey = '1cb01a0c83e14e93bfc124726241706';

const client = axios.create({
  params: {
    key: apiKey,
  },
});

export const get = async (endpoint, q) => {
  const data = await client
    .get(`${baseUrl}${endpoint}.json`, {
      params: {
        q,
      },
    })
    .then((response) => {
      return response?.data;
    });

  return data;
};
