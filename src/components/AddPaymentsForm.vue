<template>
  <v-card class="pa-10">
    <h3 class="text-center text-h4 ma-5">Add new payment</h3>
    <v-row class="justify-center align-center">
      <v-col class="ma-0" cols="12" sm="3" md="3">
        <v-menu
          v-model="menu2"
          :close-on-content-click="true"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="edited.date"
              label="Date"
              color="teal lighten-1"
              prepend-icon="mdi-calendar"
              readonly
              hide-details
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="edited.date"
            color="teal lighten-1"
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col class="ma-0" cols="12" sm="4">
        <v-select
          v-model="edited.category"
          :items="categoryList"
          label="Select category"
          dense
          solo
          hide-details
        ></v-select>
      </v-col>
      <v-col class="ma-0" cols="12" sm="3" md="3">
        <v-text-field
          type="number"
          v-model.number="edited.value"
          label="Value"
          solo
          hide-details
        />
      </v-col>
      <v-col cols="12" sm="2">
        <v-btn @click="onSave" name="save">Save</v-btn>
      </v-col>
    </v-row>
    <h4 class="text-center text-h5 ma-5">Add new category</h4>
    <v-row class="justify-center align-center">
      <v-col cols="12" sm="10">
        <v-text-field
          v-model="newCategory"
          label="New category"
          color="teal lighten-1"
          hide-details
          outlined
      /></v-col>
      <v-col cols="12" sm="2"><v-btn @click="addCategory">Add</v-btn></v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "AddPaymentsForm",
  props: {
    edited: {
      type: Object,
      default: () => ({ date: "", category: "", value: 0 }),
    },
    index: { type: Number },
  },
  data() {
    return {
      date: "",
      category: "",
      value: "",
      newCategory: "",
      menu2: false,
    };
  },
  computed: {
    ...mapGetters(["categoryList", "paymentsList"]),
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = Number(today.getMonth()) + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    getId() {
      const id = [];
      this.paymentsList.forEach((el) => id.push(el.id));
      if (this.paymentsList.length === 0) {
        return 1;
      } else {
        const max = Math.max(...id);
        return +max + 1;
      }
    },
  },
  methods: {
    ...mapActions(["fetchCategoryList"]),
    ...mapMutations(["ADD_CATEGORY", "ADD_PAYMENT_LIST", "EDIT_PAYMENT_LIST"]),
    onSave() {
      if (this.index > -1) {
        this.EDIT_PAYMENT_LIST({ index: this.index, newPayment: this.edited });
      } else {
        const data = {
          id: this.getId,
          date: this.edited.date || this.getCurrentDate,
          category: this.edited.category || "Not filled",
          value: this.edited.value || 0,
        };
        this.addPayment(data);
      }
      this.$emit("close");
    },
    addCategory() {
      const category = this.newCategory;
      if (category !== "") {
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
