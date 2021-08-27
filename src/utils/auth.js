import Cookies from "js-cookies"
const TokenKey = "vue2"

export function getToken() {
  return Cookies.getItem(TokenKey);
}

export function setToken(token) {
  return Cookies.setItem(TokenKey, token);
}

export function removeToken() {
  return Cookies.removeItem(TokenKey)
}