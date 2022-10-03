import axios from 'axios';

export const API_URL = 'https://fakestoreapi.com/';

export const API = axios.create({
  baseURL: API_URL,
});
