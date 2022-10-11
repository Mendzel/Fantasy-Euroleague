<template>
  <div class="bench-card">
    <div class="bench-card-container">
      <div class="bench-card-icon"></div>
      <div class="bench-card-name">{{ props.player.name }}</div>
      <div class="bench-card-points"></div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["player"])
</script>
<style lang="scss">
.bench-card {
  width: 100%;

  &-container {
    margin: 0 20px;
    height: 35px;
    border: 1px solid gray;
    display: flex;
  }

  &-icon,
  &-points,
  &-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 10%;
    margin: 0 4px;
  }

  &-name {
    width: 80%;
  }
}
</style>
