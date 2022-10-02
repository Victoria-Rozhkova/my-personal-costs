<template>
  <div :class="$style.context">
    <div :class="$style.context__wrap" :style="styles">
      <div
        :class="$style.context__menu"
        v-for="(menu_item, indx) in menu"
        :key="indx"
        @click="onClick(menu_item)"
      >
        {{ menu_item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  props: {
    menu: { type: Array, default: () => [] },
    styles: Object,
  },
  data() {
    return {};
  },
  methods: {
    onClick(menuItem) {
      menuItem.action();
      this.$context.close();
    },
  },
};
</script>

<style module lang="scss">
.context {
  position: relative;
  &__wrap {
    position: absolute;
  }
  &__menu {
    //
  }
}
</style>
