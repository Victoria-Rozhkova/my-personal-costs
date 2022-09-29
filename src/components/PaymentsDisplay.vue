<template>
  <div :class="$style.wrapper">
    <div v-for="(item, indx) in paymentsList" :key="indx">
      {{ indx + 1 }} : {{ item.date }} {{ item.category }} {{ item.value }}
    </div>
    <div>Total: {{ paymentsListTotalAmount }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PaymentsDisplay",
  computed: {
    ...mapGetters(["paymentsList", "paymentsListTotalAmount"]),
  },
};
</script>

<style module lang="scss">
.wrapper {
  //
}
</style>
