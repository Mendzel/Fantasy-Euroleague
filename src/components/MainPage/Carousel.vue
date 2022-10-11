<template>
  <Carousel class="carousel" :value="slides" :numVisible="1" :numScroll="1">
    <template #item="slotProps">
      <div class="carousel-item">
        <div class="carousel-item-content">
            <div class="carousel-item-content-title">{{ slotProps.data }}</div>
        </div>
      </div>
    </template>
  </Carousel>
</template>

<script setup>
const slides = ["Draft", "Games", "League", "MVP Race", "Transfers"]
</script>

<style lang="scss">
.carousel {
  padding: 30px 0 20px 0;
  &-item {
    &-content {
      &-title {
        font-size: 30px;
        text-align: center;
      }
    }
  }
}
</style>
