<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <h1 class="text-h4 text-sm-h3 mt-5 mb-5 ml-12">My personal costs</h1>
        <Preloader v-if="isLoading" />
        <PaymentsDisplay v-else />
      </v-col>
      <v-col class="d-flex justify-center">
        <div>
          <DoughnutChart
            v-if="!isLoading"
            :categories="categoryList"
            :payments="paymentsList"
          /></div
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Preloader from "../components/Preloader.vue";
import DoughnutChart from "../components/DoughnutChart.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    Preloader,
    DoughnutChart,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isLoading", "categoryList", "paymentsList"]),
  },
  methods: {
    ...mapActions(["fetchData", "fetchCategoryList"]),
    showModal() {
      this.$modal.show({
        title: "Add new payment",
        content: "AddPaymentsForm",
      });
    },
  },
  created() {
    this.fetchData();
    this.fetchCategoryList();
  },
};
</script>

<style module lang="scss">
.dashboard {
  display: flex;
  gap: 150px;
}
.costs {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
  width: 400px;
}
</style>
