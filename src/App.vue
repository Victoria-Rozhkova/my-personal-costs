<template>
  <div id="app">
    <header></header>
    <h1>My personal costs</h1>
    <main>
      <div class="costs">
        <AddPaymentsForm @addPayment="addPayment" @clicked="clicked" :show="showForm"/>
        <PaymentsDisplay :items="paymentsList" />
      </div>
      <div class="chart">chart</div>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentsForm from "./components/AddPaymentsForm.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentsForm,
  },
  data() {
    return {
      paymentsList: [],
      showForm: false,
    };
  },
  methods: {
    fetchData() {
      return [
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
    },
    addPayment(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
    clicked(isShow) {
      this.showForm = isShow;
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  color: #2c3e50;
}
main {
  display: flex;
  gap: 150px;
}
</style>
