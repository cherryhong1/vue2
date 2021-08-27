import axios from "axios";
import {
  Message
} from "element-ui";

import {
  getToken
} from "@/utils/auth";
import { Store } from "tough-cookie";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use((config) => {
  if(Store.getters.token) {
    config.headers['x-Token'] = getToken()
  }
},error=>{
  return Promise.reject(error)
});
service.interceptors.response.use(response => {
  response => {
    const res = response.data
    console.log(res)
    if(res.code !== 200) {
        Message({
          message: res.message,
          type:'error',
          duration: 5000
        })
    }
  }, error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
  }
})
return service;