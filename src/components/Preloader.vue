<template>
  <div :class="$style.preloader">
    <img src="../assets/images/coin.gif" alt="loading..." />
    <p class="text-button">Загрузка...</p>
  </div>
</template>

<script>
export default {
  name: "Preloader",
};
</script>

<style module lang="scss">
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 125px;
  font-weight: bold;
}
</style>
