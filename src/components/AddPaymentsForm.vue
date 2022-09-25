<template>
  <div :class="$style.wrapper">
    <button @click="$emit('clicked', !show)">Add new cost +</button>
    <div v-show="show">
      <input type="date" placeholder="date" v-model="date" />
      <input type="text" placeholder="category" v-model="category" />
      <input type="number" placeholder="value" v-model.number="value" />
      <button @click="onSave">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentsForm",
  props: {
    show: Boolean,
  },
  data() {
    return {
      date: "",
      category: "",
      value: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m =
        Number(today.getMonth().toLocaleString("ru-RU", { month: "2-digit" })) +
        1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSave() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category || "Not filled",
        value: this.value || "Not filled",
      };
      this.$emit("addPayment", data);
    },
  },
};
</script>

<style module lang="scss">
.wrapper {
  //
}
</style>
