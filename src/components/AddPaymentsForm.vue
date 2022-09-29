<template>
  <div>
    <input type="date" placeholder="date" v-model="date" />
    <select v-model="category">
      <option value="">Select category</option>
      <option v-for="(c, indx) in categoryList" :key="indx" :value="c.category">
        {{ c.category }}
      </option>
    </select>
    <input type="number" placeholder="value" v-model.number="value" />
    <button @click="onSave">Save</button>
    <div>
      <input type="text" placeholder="new category" v-model="newCategory" />
      <button @click="addCategory">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "AddPaymentsForm",
  data() {
    return {
      date: "",
      category: "",
      value: "",
      newCategory: "",
    };
  },
  computed: {
    ...mapGetters(["categoryList"]),
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = Number(today.getMonth()) + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    ...mapActions(["fetchCategoryList"]),
    ...mapMutations(["ADD_CATEGORY", "ADD_PAYMENT_LIST"]),
    onSave() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category || "Not filled",
        value: this.value || "",
      };
      this.addPayment(data);
      this.category = "";
      this.value = "";
    },
    addCategory() {
      const category = {
        id: new Date(),
        category: this.newCategory,
      };
      if (category.category !== "") {
        this.ADD_CATEGORY(category);
        this.newCategory = "";
      }
    },
    addPayment(data) {
      this.ADD_PAYMENT_LIST(data);
    },
  },
  created() {
    this.fetchCategoryList();
  },
};
</script>

<style module lang="scss"></style>
