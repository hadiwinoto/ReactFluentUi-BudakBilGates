
import axios from 'axios';
import Cookies from 'js-cookie';


axios.defaults.withCredentials = true;               
axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';      

const BASE_URL = 'http://172.30.1.247:8080';          


const api = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});


api.interceptors.request.use((config) => {
  const jwt = localStorage.getItem('token');
  if (jwt) {
    config.headers.Authorization = `Bearer ${jwt}`;
  }
  return config;
});


export const getCsrfToken = async () => {
  
  await api.get(`${BASE_URL}/sanctum/csrf-cookie`);

  return Cookies.get('XSRF-TOKEN');   
};

export default api;
