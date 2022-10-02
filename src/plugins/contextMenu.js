export default {
  install(Vue) {
    if (this.installed) return;
    this.installed = true;
    this.caller = null;
    Vue.prototype.$context = {
      EventBus: new Vue(),
      open({ event, menu }) {
        const caller = event.target;

        if (caller !== this.caller) {
          this.caller = caller;
          this.EventBus.$emit("open", { menu, caller });
        } else {
          this.close();
          this.caller = null;
        }
      },
      close() {
        this.EventBus.$emit("close");
      },
    };
  },
};
