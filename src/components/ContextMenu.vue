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
        <v-icon small class="mr-2" @click="onClick(menu_item)">
          {{ menu_item.icon }}
        </v-icon>
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
  width: 50%;
  &__wrap {
    position: absolute;
    right: -50px;
    bottom: 435px;
    background: #f1f8e9;
    padding: 12px;
    border-radius: 5px;
    box-shadow: 2px 4px 12px -3px rgba(34, 60, 80, 0.2);
  }
  &__menu {
    cursor: pointer;
  }
}
</style>
