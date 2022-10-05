<template>
  <v-app>
    <v-app-bar app color="light-green lighten-5" flat>
      <div class="d-flex align-center">
        <v-btn to="/">Dashboard</v-btn>
        <v-btn to="/about">About</v-btn>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <transition name="fade">
      <ModalWindow v-if="showModal" :settings="modalSettings" />
    </transition>
    <transition name="fade">
      <ContextMenu
        v-if="showContextMenu"
        :menu="contextMenuItems"
        :styles="styles"
      />
    </transition>
  </v-app>
</template>

<script>
import ModalWindow from "./components/ModalWindow.vue";
import ContextMenu from "./components/ContextMenu.vue";
export default {
  name: "App",
  components: { ModalWindow, ContextMenu },
  data() {
    return {
      showModal: false,
      modalSettings: {},
      showContextMenu: false,
      contextMenuItems: [],
      xPos: 0,
      yPos: 0,
    };
  },
  computed: {
    styles() {
      return {
        top: `${this.yPos + 10}px`,
        left: `${this.xPos + 10}px`,
      };
    },
  },
  methods: {
    modalOpen(settings) {
      this.showModal = true;
      this.modalSettings = settings;
    },
    modalClose() {
      this.showModal = false;
      this.modalSettings = {};
    },
    setPosition(caller) {
      const pos = caller.getBoundingClientRect();
      this.yPos = pos.top;
      this.xPos = pos.left;
    },
    contextOpen({ menu, caller }) {
      this.showContextMenu = true;
      this.contextMenuItems = menu;
      this.setPosition(caller);
    },
    contextClose() {
      this.showContextMenu = false;
      this.contextMenuItems = [];
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.modalOpen);
    this.$modal.EventBus.$on("hide", this.modalClose);
    this.$context.EventBus.$on("open", this.contextOpen);
    this.$context.EventBus.$on("close", this.contextClose);
  },
  destroyed() {
    this.$modal.EventBus.off("show");
    this.$modal.EventBus.off("hide");
    this.$context.EventBus.off("open");
    this.$context.EventBus.off("close");
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
