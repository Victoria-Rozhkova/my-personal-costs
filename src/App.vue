<template>
  <div id="app">
    <header></header>
    <h1>My personal costs</h1>
    <main>
      <div class="costs">
        <AddPaymentsForm
          @addPayment="addPayment"
          @clicked="clicked"
          :show="showForm"
        />
        <PaymentsDisplay
          :items="paymentsList"
          :total="paymentsListTotalAmount"
        />
      </div>
      <div class="chart">chart</div>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentsForm from "./components/AddPaymentsForm.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentsForm,
  },
  data() {
    return {
      showForm: false,
    };
  },
  computed: {
    ...mapGetters(["paymentsList", "paymentsListTotalAmount"]),
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["ADD_PAYMENT_LIST", "TOGGLE_IS_LOADING"]),
    clicked(isShow) {
      this.showForm = isShow;
    },
    addPayment(data) {
      this.ADD_PAYMENT_LIST(data);
    },
  },
  created() {
    this.TOGGLE_IS_LOADING(true);
    this.fetchData();
    this.TOGGLE_IS_LOADING(false);
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
