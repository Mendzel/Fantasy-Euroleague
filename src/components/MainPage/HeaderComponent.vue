<template>
  <div class="header-container">
    <img
      class="header-logo"
      src="https://i.imgur.com/nkKDI77.png"
      @click="this.$router.push('/')"
    />
  </div>
</template>

<script setup>
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.header {
  &-container {
    display: flex;
    height: 170px;
    width: 100%;
    background: $primary;
    top: 0;
  }
  &-logo {
    width: 100px;
    margin: auto;
    cursor: pointer;
  }
}
</style>
