import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/haple/rocketshoes_app',
});

export default api;
