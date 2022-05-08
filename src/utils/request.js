import axios from 'axios';

const env = import.meta.env;

const baseURL = env.VITE_APP_BASE_API;

const service = axios.create({
  baseURL,
  timeout: 20000,
});

// request攔截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// 響應攔截器
service.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
