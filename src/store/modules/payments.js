export default {
  state: { paymentsList: [] },
  mutations: {
    SET_PAYMENTS_LIST(state, paymentsList) {
      state.paymentsList = paymentsList;
    },
    ADD_PAYMENT_LIST(state, payment) {
      state.paymentsList.push(payment);
    },
    EDIT_PAYMENT_LIST(state, { index, newPayment }) {
      Object.assign(state.paymentsList[index], newPayment);
    },
    DELETE_PAYMENT(state, index) {
      state.paymentsList.splice(index, 1);
    },
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    paymentsListTotalAmount: ({ paymentsList }) =>
      paymentsList.reduce((cur, { value }) => cur + Number(value), 0),
  },
  actions: {
    fetchData({ commit }) {
      commit("TOGGLE_IS_LOADING", true);
      setTimeout(() => {
        const data = [
          { id: 1, date: "28.03.2020", category: "Food", value: 169 },
          { id: 2, date: "24.03.2020", category: "Transport", value: 360 },
          { id: 3, date: "24.03.2020", category: "Shop", value: 532 },
          { id: 4, date: "28.03.2020", category: "Navigation", value: 560 },
          { id: 5, date: "24.03.2020", category: "Transport", value: 360 },
          { id: 6, date: "24.03.2020", category: "Shop", value: 532 },
          { id: 7, date: "28.03.2020", category: "Food", value: 169 },
          { id: 8, date: "24.03.2020", category: "Sport", value: 360 },
          { id: 9, date: "24.03.2020", category: "Education", value: 532 },
          { id: 10, date: "28.03.2020", category: "Sport", value: 169 },
          { id: 11, date: "24.03.2020", category: "Transport", value: 360 },
          { id: 12, date: "24.03.2020", category: "Sport", value: 532 },
          { id: 13, date: "28.03.2020", category: "Education", value: 169 },
          { id: 14, date: "24.03.2020", category: "Sport", value: 360 },
          { id: 15, date: "24.03.2020", category: "Food", value: 1532 },
          { id: 16, date: "24.03.2020", category: "Transport", value: 360 },
          { id: 17, date: "24.03.2020", category: "Shop", value: 532 },
          { id: 18, date: "24.03.2020", category: "Party", value: 832 },
          { id: 19, date: "24.03.2020", category: "Shop", value: 532 },
          { id: 20, date: "24.03.2020", category: "Entertaiment", value: 1532 },
        ];
        commit("SET_PAYMENTS_LIST", data);
        commit("TOGGLE_IS_LOADING", false);
      }, 3000);
    },
  },
};
