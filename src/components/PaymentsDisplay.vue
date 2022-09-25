<template>
  <div :class="$style.wrapper">
    <div v-for="(item, indx) in items" :key="indx">
      {{ indx + 1 }} : {{ item.date }} {{ item.category }} {{ item.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style module lang="scss">
.wrapper {
  //
}
</style>
