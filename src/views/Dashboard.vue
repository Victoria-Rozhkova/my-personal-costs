<template>
  <div>
    <h1>My personal costs</h1>
    <div :class="$style.dashboard">
      <div :class="$style.costs">
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
      <div :class="$style.chart">chart</div>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import AddPaymentsForm from "../components/AddPaymentsForm.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "Dashboard",
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

<style module lang="scss">
.dashboard {
  display: flex;
  gap: 150px;
}
.costs {
  //
}
.chart {
  //
}
</style>
