import axios from 'axios';

const baseUrl = 'http://api.weatherapi.com/v1/';
const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

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
