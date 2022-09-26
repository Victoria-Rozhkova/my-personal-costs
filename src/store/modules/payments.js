export default {
  state: { paymentsList: [] },
  mutations: {
    SET_PAYMENTS_LIST(state, paymentsList) {
      state.paymentsList = paymentsList;
    },
    ADD_PAYMENT_LIST(state, payment) {
      state.paymentsList.push(payment);
    },
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    paymentsListTotalAmount: ({ paymentsList }) =>
      paymentsList.reduce((cur, { value }) => cur + Number(value), 0),
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        const data = [
          {
            date: "28.03.2020",
            category: "Food",
            value: 169,
          },
          {
            date: "24.03.2020",
            category: "Transport",
            value: 360,
          },
          {
            date: "24.03.2020",
            category: "Food",
            value: 532,
          },
        ];
        commit("SET_PAYMENTS_LIST", data);
      }, 3000);
    },
  },
};
