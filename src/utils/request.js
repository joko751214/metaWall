import axios from 'axios';
import { showLoading, hideLoading } from '@/utils/loading';

const env = import.meta.env;

const baseURL = 'https://stormy-shelf-62914.herokuapp.com/';

const service = axios.create({
  baseURL,
  timeout: 20000,
});

// request攔截器
service.interceptors.request.use(
  (config) => {
    showLoading();
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
    setTimeout(() => {
      hideLoading();
    }, 200);
    return res;
  },
  (error) => {
    setTimeout(() => {
      hideLoading();
    }, 200);
    return Promise.reject(error);
  }
);

export default service;
