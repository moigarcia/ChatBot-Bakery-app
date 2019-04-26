import axios from 'axios'

const API_URL="http://localhost:3001"

const http = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

export const getSpecial = () => http.get('/special').then(response => response.data.body);
