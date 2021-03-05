import axios from 'axios';

export const BASE_API_URL = `http://swapi.dev/api/planets`;

export const apiClinet = axios.create({
  baseURL: BASE_API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});
