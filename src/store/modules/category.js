export default {
  state: { categoryList: [] },
  mutations: {
    SET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList;
    },
    ADD_CATEGORY(state, category) {
      state.categoryList.push(category);
    },
  },
  getters: {
    categoryList: (state) => state.categoryList,
  },
  actions: {
    fetchCategoryList({ commit }) {
      setTimeout(() => {
        const data = [
          "Food",
          "Navigation",
          "Sport",
          "Entertaiment",
          "Transport",
          "Education",
          "Party",
          "Shop",
        ];
        commit("SET_CATEGORY_LIST", data);
      }, 1000);
    },
  },
};
