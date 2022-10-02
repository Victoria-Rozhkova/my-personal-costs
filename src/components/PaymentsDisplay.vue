<template>
  <div :class="$style.wrapper">
    <div v-for="(item, indx) in paymentsList" :key="indx">
      {{ indx + 1 }} : {{ item.date }} {{ item.category }} {{ item.value
      }}<span @click="openContextMenu($event, item)">...</span>
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
  methods: {
    editItem(item) {
      console.log(item);
    },
    deleteItem(item) {
      console.log(item);
    },
    openContextMenu(event, item) {
      const menu = [
        {
          text: "Edit",
          action: () => {
            this.editItem(item);
          },
        },
        {
          text: "Delete",
          action: () => {
            this.deleteItem(item);
          },
        },
      ];
      this.$context.open({ event, menu });
    },
  },
};
</script>

<style module lang="scss">
.wrapper {
  //
}
</style>
