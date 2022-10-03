<template>
  <div :class="$style.notFound">
    <p>404 Not Found</p>
    <img src="../assets/images/404.gif" alt="404" />
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style module lang="scss">
.notFound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
