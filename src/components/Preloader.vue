<template>
  <div :class="$style.preloader">
    <img src="../assets/coin.gif" alt="loading..." />
    <p>Загрузка...</p>
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
  margin-top: 25px;
  font-weight: bold;
}
</style>
