import Vue from "vue";
import Vuex from "vuex";
// 本地持久化存储数据插件
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
});

export default new Vuex.Store({
  state: {
    userInfo: {},
  },
  mutations: {},
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin],
});
