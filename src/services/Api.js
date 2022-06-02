import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
});

api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params.apikey = "APIKEY";
  config.params.hash = "HASH";
  config.params.ts = "TS";
  return config;
});

export default api;