import request from "@/utils/request"

export function login(data) {
  console.log(request)
  return  request({
    url: '/login',
    method:'post',
    data
  })
}

export function getInfo(data){
  return  request({
    url:'/user/info',
    method:'get',
    params: { data }
  })
}

export function logout() {
  return request({
    url:'/user/logout',
    method: 'post'
  })
}