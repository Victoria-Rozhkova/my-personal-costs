<template>
  <div :class="$style.wrapper">
    <div v-for="(item, indx) in items" :key="indx">
      {{ indx + 1 }} : {{ item.date }} {{ item.category }} {{ item.value }}
    </div>
    <div>Total: {{ total }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    total: {
      type: Number,
    },
  },
  computed: {
    ...mapGetters(["isLoading"]),
  },
};
</script>

<style module lang="scss">
.wrapper {
  //
}
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  img {
    width: 65px;
  }
}
</style>
