<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="paymentsList"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
      class="elevation-1"
      hide-default-footer
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-dialog v-model="dialog" max-width="650px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="teal" dark class="mb-2" v-bind="attrs" v-on="on">
                Add new cost<v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <AddPaymentsForm
                :edited="editedItem"
                :index="editedIndex"
                @close="close"
              />
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-spacer></v-spacer>
          <div class="text-right text-h6 pb-5">
            Total: {{ paymentsListTotalAmount }} $
          </div>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon @click="openContextMenu($event, item)"
          >mdi-dots-vertical</v-icon
        >
      </template>
      <template #[`item.value`]="{ item }">{{ item.value }} $</template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination
        text
        color="teal lighten-1"
        v-model="page"
        :length="Math.ceil(paymentsList.length / itemsPerPage)"
        total-visible="5"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AddPaymentsForm from "./AddPaymentsForm.vue";

export default {
  name: "PaymentsDisplay",
  data() {
    return {
      page: 1,
      itemsPerPage: 5,
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        date: "",
        category: "",
        value: 0,
      },
      defaultItem: {
        date: "",
        category: "",
        value: 0,
      },
    };
  },
  components: { AddPaymentsForm },
  computed: {
    ...mapGetters(["paymentsList", "paymentsListTotalAmount"]),
    headers() {
      return [
        { text: "#", value: "id" },
        { text: "Date", value: "date" },
        { text: "Category", value: "category" },
        { text: "Value", value: "value" },
        { text: "Actions", value: "actions" },
      ];
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  methods: {
    ...mapMutations(["DELETE_PAYMENT"]),
    editItem(item) {
      this.editedIndex = this.paymentsList.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.paymentsList.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.DELETE_PAYMENT(this.editedIndex);
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    openContextMenu(event, item) {
      const menu = [
        {
          text: "Edit",
          icon: `mdi-pencil`,
          action: () => {
            this.editItem(item);
          },
        },
        {
          text: "Delete",
          icon: `mdi-delete`,
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

<style module lang="scss"></style>
