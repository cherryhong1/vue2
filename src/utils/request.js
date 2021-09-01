import axios from "axios";

// import {
//   getToken
// } from "@/utils/auth";

const service = axios.create({
  baseURL: "",
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
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
    const res = response.data;
    if (res.code !== 200) {
      console.error("Error");
    } else {
      return res.data;
    }
  },
  (error) => {
    console.log("err", error);
    return Promise.reject(error);
  }
);
export default service;
