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
        <Preloader v-if="isLoading" />
        <PaymentsDisplay
          v-else
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
import Preloader from "../components/Preloader.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentsForm,
    Preloader,
  },
  data() {
    return {
      showForm: false,
    };
  },
  computed: {
    ...mapGetters(["paymentsList", "paymentsListTotalAmount", "isLoading"]),
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["ADD_PAYMENT_LIST"]),
    clicked(isShow) {
      this.showForm = isShow;
    },
    addPayment(data) {
      this.ADD_PAYMENT_LIST(data);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style module lang="scss">
.dashboard {
  display: flex;
  gap: 150px;
}
.costs {
  width: 400px;
}
.chart {
  //
}
</style>
