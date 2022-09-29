<template>
  <div>
    <h1>My personal costs</h1>
    <div :class="$style.dashboard">
      <div :class="$style.costs">
        <button @click="showModal">Add new cost +</button>
        <Preloader v-if="isLoading" />
        <PaymentsDisplay v-else />
      </div>
      <div :class="$style.chart">chart</div>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Preloader from "../components/Preloader.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    Preloader,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isLoading"]),
  },
  methods: {
    ...mapActions(["fetchData"]),
    showModal() {
      this.$modal.show({
        title: "Add new payment",
        content: "AddPaymentsForm",
      });
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
