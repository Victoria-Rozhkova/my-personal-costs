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
          { id: 1, category: "Food" },
          { id: 2, category: "Navigation" },
          { id: 3, category: "Sport" },
          { id: 4, category: "Entertaiment" },
          { id: 5, category: "Education" },
          { id: 6, category: "Party" },
          { id: 7, category: "Taxi" },
        ];
        commit("SET_CATEGORY_LIST", data);
      }, 1000);
    },
  },
};
