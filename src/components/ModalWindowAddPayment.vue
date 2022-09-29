<template>
  <div :class="$style.wrapper">
    <div :class="$style.wrapper__modal">
      <div>
        <h4>{{ settings.title }}</h4>
        <component :is="settings.content" />
        <div>
          <button @click="hideModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddPaymentsForm from "./AddPaymentsForm.vue";

export default {
  name: "ModalWindowAddPayment",
  props: {
    settings: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { AddPaymentsForm },
  methods: {
    hideModal() {
      this.$modal.hide();
    },
  },
};
</script>

<style module lang="scss">
.wrapper {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  &__modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    padding: 54px 27px;
    border: solid 1px gray;
    border-radius: 15px;
    box-shadow: 4px 8px 15px 0px #00000040;
    max-width: 400px;
    margin: 20% auto;
  }
}
</style>
