import { login, getInfo } from "@/api/user";
import { getToken, setToken } from "@/utils/auth";
// import { resetRouter } from "@/router";

const getDefaultState = () => {
  return {
    token: getToken(),
    name: "",
    avatar: "",
  };
};
const state = getDefaultState();
const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
};

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then((res) => {
          console.log(res);
          const { data } = res;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getInfo({commit,state}){
    return new Promise((resolve,reject)=>{
      getInfo(state.token).then(res=>{
        const { data } = res
        if(!data) {
          return reject('校验失败，请重新登录')
        }
        const {name,avatar } = data
        commit('SET_NAME',name)
        commit('SET_AVATAR',avatar)
        resolve(data)
      }).catch(err=>{
        console.log(err)
      })
    })
  },

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
