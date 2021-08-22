import axios from 'axios';
import {store} from '../state';

export const BASE_API_URL = `https://livz.ru/`;

export const apiClinet = axios.create({
  baseURL: BASE_API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Authorization: store.getState().auth.token,
  },
});
