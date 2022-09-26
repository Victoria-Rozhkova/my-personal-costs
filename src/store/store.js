import Vuex from "vuex";
import Vue from "vue";
import payments from "./modules/payments";
import category from "./modules/category";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { isLoading: false },
  mutations: {
    TOGGLE_IS_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
  },
  actions: {},
  modules: { payments, category },
});
