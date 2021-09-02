import axios from "axios";

// import {
//   getToken
// } from "@/utils/auth";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    console.log(config)
    // config.headers['X-Token'] = getToken()
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// response interceptors
service.interceptors.response.use(
  (response) => {
    console.log(response)
    const res = response.data;

      return res.data;

  },
  (error) => {
    console.log("err", error);
    return Promise.reject(error);
  }
);
export default service;
