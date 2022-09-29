<template>
  <div id="app">
    <header>
      <router-link to="/">Dashboard</router-link> /
      <router-link to="/about">About</router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <transition name="fade">
      <ModalWindowAddPayment v-if="showModal" :settings="modalSettings" />
    </transition>
  </div>
</template>

<script>
import ModalWindowAddPayment from "./components/ModalWindowAddPayment.vue";
export default {
  name: "App",
  data() {
    return {
      showModal: false,
      modalSettings: {},
    };
  },
  components: { ModalWindowAddPayment },
  methods: {
    modalOpen(settings) {
      this.showModal = true;
      this.modalSettings = settings;
    },
    modalClose() {
      this.showModal = false;
      this.modalSettings = {};
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.modalOpen);
    this.$modal.EventBus.$on("hide", this.modalClose);
  },
  destroyed() {
    this.$modal.EventBus.off("show");
    this.$modal.EventBus.off("hide");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
